import "server-only";

import { env } from "@/env";
import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AuthUser } from "@/lib/types";
import { z } from "zod";
import { cache } from "react";

const encodedKey = new TextEncoder().encode(env.AUTH_SECRET);

const session_cookie_name = "session";
const session_cookie_max_age = 1000 * 60 * 60 * 24 * 7; // 1 week

type SessionUser = AuthUser;

export async function setSessionUser(user: SessionUser) {
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

export const getSessionUser = cache(async (): Promise<SessionUser | null> => {
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

async function encryptSessionUser(user: SessionUser): Promise<string> {
	return new SignJWT(user).setProtectedHeader({ alg: "HS256" }).setIssuedAt().setExpirationTime("7d").sign(encodedKey);
}

async function decryptSessionUser(session: string): Promise<SessionUser | null> {
	try {
		const { payload } = await jwtVerify(session, encodedKey, {
			algorithms: ["HS256"],
		});

		const userSchema = z.object({});

		return userSchema.parse(payload);
	} catch (error) {
		return null;
	}
}
