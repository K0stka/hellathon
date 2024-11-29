"use server";

import "server-only";

import { removeSessionUser, setSessionUser } from "./session";
import { z } from "zod";
import { authenticateUser } from "@/api/api";
import { loginSchema } from "@/app/public/page";
import { FormResponse } from "@/lib/utility";

export async function login(data: z.infer<typeof loginSchema>): Promise<FormResponse> {
	try {
		const userData = await authenticateUser(data.loginName, data.password);
		// await setSessionUser(userData);
		return { error: JSON.stringify(userData) };
	} catch (error: any) {
		return { error: error.message };
	}
}

export async function logout() {
	await removeSessionUser();
}
