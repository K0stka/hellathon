"use server";
// @ts-ignore

// @ts-ignore
import "server-only";
// @ts-ignore

// @ts-ignore
import { removeSessionUser, setSessionUser } from "./session";
// @ts-ignore
import { z } from "zod";
// @ts-ignore
import { authenticateUser } from "@/api/api";
// @ts-ignore
import { FormResponse } from "@/lib/utility";
import { loginSchema } from "@/lib/utils";
// @ts-ignore

export async function login(data: z.infer<typeof loginSchema>): Promise<FormResponse> {
	// @ts-ignore
	const userData = await authenticateUser(data.loginName, data.password);
	// @ts-ignore

	// @ts-ignore
	if (userData.status === "error") return { error: userData.message };
	// @ts-ignore

	// @ts-ignore
	await setSessionUser(userData);
	// @ts-ignore
	return {};
	// @ts-ignore
}
// @ts-ignore

// @ts-ignore
export async function logout() {
	// @ts-ignore
	await removeSessionUser();
	// @ts-ignore
}
// @ts-ignore
