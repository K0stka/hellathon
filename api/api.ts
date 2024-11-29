"use server";

import { env } from "@/env";
import { AuthUser } from "@/lib/types";
import { APIError } from "@/lib/utility";

const SECURITY_TOKEN = env.SECURITY_TOKEN;

export const authenticateUser = async (loginName: string, password: string): Promise<AuthUser> => {
	const headers = new Headers();
	headers.append("Content-Type", "application/json");
	headers.append("securitytoken", SECURITY_TOKEN);

	try {
		const params = new URLSearchParams({ loginName, password });
		const response = await fetch(`https://www.hella.com/webEdiPersistence/users/authenticateUser?${params}`, {
			method: "GET",
			headers,
		});

		if (response.status === 401) {
			const error: APIError = { message: "Unauthorized" };
			return Promise.reject(error);
		}

		const user = await response.json();
		return user;
	} catch (error: any) {
		const apiError: APIError = { message: error.message || "An error occurred" };
		return Promise.reject(apiError);
	}
};

export const getAllUsers = async () => {
	try {
		const response = await fetch("https://www.hella.com/webEdiPersistence/users/getAllUsers", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				securitytoken: SECURITY_TOKEN,
			},
		});

		if (response.status === 401) {
			const error: APIError = { message: "Unauthorized" };
			return Promise.reject(error);
		}

		const users = await response.json();
		return users;
	} catch (error: any) {
		const apiError: APIError = { message: error.message || "An error occurred" };
		return Promise.reject(apiError);
	}
};

export const getUserById = async (id: number) => {
	try {
		const params = new URLSearchParams({ id: id.toString() });
		const response = await fetch(`https://www.hella.com/webEdiPersistence/users/getUserById?${params}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				securitytoken: SECURITY_TOKEN,
			},
		});

		if (response.status === 401) {
			const error: APIError = { message: "Unauthorized" };
			return Promise.reject(error);
		}

		const user = await response.json();
		return user;
	} catch (error: any) {
		const apiError: APIError = { message: error.message || "An error occurred" };
		return Promise.reject(apiError);
	}
};

export const insertUser = async (userData: any) => {
	try {
		const response = await fetch(`https://www.hella.com/webEdiPersistence/users/insertUser`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				securitytoken: SECURITY_TOKEN,
			},
			body: JSON.stringify(userData),
		});

		if (response.status === 401) {
			const error: APIError = { message: "Unauthorized" };
			return Promise.reject(error);
		}

		const user = await response.json();
		return user;
	} catch (error: any) {
		const apiError: APIError = { message: error.message || "An error occurred" };
		return Promise.reject(apiError);
	}
};

export const updateUser = async (userData: any) => {
	try {
		const response = await fetch(`https://www.hella.com/webEdiPersistence/users/updateUser`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				securitytoken: SECURITY_TOKEN,
			},
			body: JSON.stringify(userData),
		});

		if (response.status === 401) {
			const error: APIError = { message: "Unauthorized" };
			return Promise.reject(error);
		}

		const user = await response.json();
		return user;
	} catch (error: any) {
		const apiError: APIError = { message: error.message || "An error occurred" };
		return Promise.reject(apiError);
	}
};
