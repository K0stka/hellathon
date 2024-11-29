"use server";

import "server-only";

import { removeSessionUser, setSessionUser } from "./session";
import { z } from "zod";
import { authenticateUser } from "@/api/api";
import { loginSchema } from "@/app/public/page";
import { FormResponse } from "@/lib/utility";

export async function login(data: z.infer<typeof loginSchema>): Promise<FormResponse> {
	const userData = await authenticateUser(data.loginName, data.password);

	if (userData.status === "error") return { error: userData.message };

	await setSessionUser(userData);
	return {};
}

export async function logout() {
	await removeSessionUser();
}
