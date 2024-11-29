import "server-only";

import { env } from "@/env";
import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AuthUser } from "@/lib/types";
import { authUserSchema } from "@/lib/zod";
import { cache } from "react";

const encodedKey = new TextEncoder().encode(env.AUTH_SECRET);

const session_cookie_name = "session";
const session_cookie_max_age = 1000 * 60 * 60 * 24 * 7; // 1 week

export async function setSessionUser(user: AuthUser) {
	const cookieStore = await cookies();

	const expiresAt = new Date(Date.now() + session_cookie_max_age);
	const cookie = await encryptSessionUser(user);

	cookieStore.set(session_cookie_name, cookie, {
		httpOnly: true,
		secure: true,
		expires: expiresAt,
		sameSite: "lax",
		path: "/",
	});

	redirect("/");
}

//TODO: Fix cache
export const getSessionUser: () => Promise<AuthUser | null> = cache(async () => {
	const cookieStore = await cookies();
	const cookie = cookieStore.get(session_cookie_name)?.value;

	if (!cookie) return null;

	return decryptSessionUser(cookie);
});

export async function removeSessionUser() {
	const cookieStore = await cookies();
	cookieStore.delete(session_cookie_name);

	redirect("/");
}

async function encryptSessionUser(user: AuthUser): Promise<string> {
	// @ts-ignore
	return new SignJWT(user).setProtectedHeader({ alg: "HS256" }).setIssuedAt().setExpirationTime("7d").sign(encodedKey);
}

async function decryptSessionUser(session: string): Promise<AuthUser | null> {
	try {
		const { payload } = await jwtVerify(session, encodedKey, {
			algorithms: ["HS256"],
		});

		// @ts-ignore
		return authUserSchema.parse(payload);
	} catch (error) {
		return null;
	}
}
