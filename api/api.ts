"use server";

import { env } from "@/env";
import { AuthUser, ValidRoleId } from "@/lib/types";
import { APIError } from "@/lib/utility";
import type { InsertUser, User, CreateSupplier } from "@/lib/types.d";
import { userSchema, usersArraySchema, supplierSchema, shipmentSchema, userGroupIdsSchema, suppliersArraySchema, updateSupplierSchema, labsArraySchema } from "@/lib/zod";
import { z } from "zod";

const SECURITY_TOKEN = env.SECURITY_TOKEN;

export const authenticateUser = async (loginName: string, password: string): Promise<AuthUser | APIError> => {
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
			const error: APIError = { status: "error", message: "Unauthorized" };
			return error;
		}

		const user = await response.json();

		const parsed: AuthUser = userSchema.parse(user) as AuthUser;

		const roles = await getUserGroupsByUserId(parsed.id.toString());

		if ("status" in roles) {
			return roles;
		}

		parsed.roles = roles;

		return parsed;
	} catch (error: any) {
		const apiError: APIError = { status: "error", message: error.message || "An error occurred" };
		return apiError;
	}
};

export const getAllUsers = async (): Promise<APIError | User[]> => {
	try {
		const response = await fetch("https://www.hella.com/webEdiPersistence/users/getAllUsers", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				securitytoken: SECURITY_TOKEN,
			},
		});

		if (response.status === 401) {
			const error: APIError = { status: "error", message: "Unauthorized" };
			return error;
		}

		const users = await response.json();
		return usersArraySchema.parse(users);
	} catch (error: any) {
		const apiError: APIError = { status: "error", message: error.message || "An error occurred" };
		return apiError;
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
			const error: APIError = { status: "error", message: "Unauthorized" };
			return error;
		}

		const user = await response.json();
		return userSchema.parse(user);
	} catch (error: any) {
		const apiError: APIError = { status: "error", message: error.message || "An error occurred" };
		return apiError;
	}
};

export const createUserGroup = async (userGroupData: z.infer<typeof userGroupIdsSchema>) => {
	try {
		const response = await fetch(`https://www.hella.com/webEdiPersistence/users/createUserGroup`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				securitytoken: SECURITY_TOKEN,
			},
			body: JSON.stringify(userGroupData),
		});

		if (response.status === 401) {
			const error: APIError = { status: "error", message: "Unauthorized" };
			return error;
		}

		const userGroup = await response.json();
		return userGroupIdsSchema.parse(userGroup);
	} catch (error: any) {
		const apiError: APIError = { status: "error", message: error.message || "An error occurred" };
		return apiError;
	}
};

export const getUserGroupsByUserId = async (userId: string): Promise<ValidRoleId[] | APIError> => {
	try {
		const params = new URLSearchParams({ userId });
		const response = await fetch(`https://www.hella.com/webEdiPersistence/users/getUserGroupsByUserId?${params}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				securitytoken: SECURITY_TOKEN,
			},
		});

		if (response.status === 401) {
			return { status: "error", message: "Unauthorized" };
		}

		const userGroups = await response.json();
		const roleIds = userGroups.map((group: { groupId: number }) => group.groupId);
		return roleIds.filter((id: number): id is ValidRoleId => [3333, 4444, 6666, 8888].includes(id));
	} catch (error: any) {
		return { status: "error", message: error.message || "An error occurred" };
	}
};

export const insertUser = async (userData: InsertUser) => {
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
			const error: APIError = { status: "error", message: "Unauthorized" };
			return error;
		}

		const user = await response.json();
		return userSchema.parse(user);
	} catch (error: any) {
		const apiError: APIError = { status: "error", message: error.message || "An error occurred" };
		return apiError;
	}
};

export const updateUser = async (userData: User) => {
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
			const error: APIError = { status: "error", message: "Unauthorized" };
			return error;
		}

		const user = await response.json();
		return userSchema.parse(user);
	} catch (error: any) {
		const apiError: APIError = { status: "error", message: error.message || "An error occurred" };
		return apiError;
	}
};

export const createSupplierAdmin = async (userData: InsertUser, supplierId: number) => {
	try {
		const userResponse = await fetch(`https://www.hella.com/webEdiPersistence/users/insertUser`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				securitytoken: SECURITY_TOKEN,
			},
			body: JSON.stringify(userData),
		});

		if (userResponse.status === 401) {
			const error: APIError = { status: "error", message: "Unauthorized" };
			return error;
		}

		const user = await userResponse.json();
		const parsedUser = userSchema.parse(user);

		const userGroupData = { userId: parsedUser.id, groupId: 6666, supplierId: supplierId };
		const groupResponse = await fetch(`https://www.hella.com/webEdiPersistence/users/createUserGroup`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				securitytoken: SECURITY_TOKEN,
			},
			body: JSON.stringify(userGroupData),
		});

		if (groupResponse.status === 401) {
			const error: APIError = { status: "error", message: "Unauthorized" };
			return error;
		}

		const userGroup = await groupResponse.json();
		userGroupIdsSchema.parse(userGroup);

		return parsedUser;
	} catch (error: any) {
		const apiError: APIError = { status: "error", message: error.message || "An error occurred" };
		return apiError;
	}
};

export const createSupplier = async (supplierData: CreateSupplier) => {
	try {
		const response = await fetch(`https://www.hella.com/webEdiPersistence/suppliers/createSupplier`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				securitytoken: SECURITY_TOKEN,
			},
			body: JSON.stringify(supplierData),
		});

		if (response.status === 401) {
			const error: APIError = { status: "error", message: "Unauthorized" };
			return error;
		}

		const supplier = await response.json();
		return supplierSchema.parse(supplier);
	} catch (error: any) {
		const apiError: APIError = { status: "error", message: error.message || "An error occurred" };
		return apiError;
	}
};

export const updateSupplier = async (supplierData: z.infer<typeof updateSupplierSchema>) => {
	try {
		const response = await fetch(`https://www.hella.com/webEdiPersistence/suppliers/updateSupplier`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				securitytoken: SECURITY_TOKEN,
			},
			body: JSON.stringify(supplierData),
		});

		if (response.status === 401) {
			const error: APIError = { status: "error", message: "Unauthorized" };
			return error;
		}

		const supplier = await response.json();
		return updateSupplierSchema.parse(supplier);
	} catch (error: any) {
		const apiError: APIError = { status: "error", message: error.message || "An error occurred" };
		return apiError;
	}
};

export const deleteSupplier = async (id: number) => {
	try {
		const response = await fetch(`https://www.hella.com/webEdiPersistence/suppliers/deleteSupplier?id=${id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				securitytoken: SECURITY_TOKEN,
			},
		});

		if (response.status === 401) {
			const error: APIError = { status: "error", message: "Unauthorized" };
			return error;
		}

		const supplier = await response.json();
		return supplier;
	} catch (error: any) {
		const apiError: APIError = { status: "error", message: error.message || "An error occurred" };
		return apiError;
	}
};

export const getSupplierById = async (id: number) => {
	try {
		const params = new URLSearchParams({ id: id.toString() });
		const response = await fetch(`https://www.hella.com/webEdiPersistence/suppliers/getSupplierById?${params}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				securitytoken: SECURITY_TOKEN,
			},
		});

		if (response.status === 401) {
			const error: APIError = { status: "error", message: "Unauthorized" };
			return error;
		}

		const supplier = await response.json();
		return supplierSchema.parse(supplier);
	} catch (error: any) {
		const apiError: APIError = { status: "error", message: error.message || "An error occurred" };
		return apiError;
	}
};

export const insertShipment = async (shipmentData: z.infer<typeof shipmentSchema>) => {
	try {
		const response = await fetch(`https://www.hella.com/webEdiPersistence/shipments/insertShipment`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				securitytoken: SECURITY_TOKEN,
			},
			body: JSON.stringify(shipmentData),
		});

		if (response.status === 401) {
			const error: APIError = { status: "error", message: "Unauthorized" };
			return error;
		}

		const shipment = await response.json();
		return shipmentSchema.parse(shipment);
	} catch (error: any) {
		const apiError: APIError = { status: "error", message: error.message || "An error occurred" };
		return apiError;
	}
};

export const getSuppliersOfClientWithId = async (clientId: number) => {
	try {
		const params = new URLSearchParams({ clientId: clientId.toString() });
		const response = await fetch(`https://www.hella.com/webEdiPersistence/suppliers/getSuppliersOfClientWithId?${params}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				securitytoken: SECURITY_TOKEN,
			},
		});

		if (response.status === 401) {
			const error: APIError = { status: "error", message: "Unauthorized" };
			return error;
		}

		const suppliers = await response.json();
		return suppliersArraySchema.parse(suppliers);
	} catch (error: any) {
		const apiError: APIError = { status: "error", message: error.message || "An error occurred" };
		return apiError;
	}
};

export const getAllLabs = async (clientNumber: number) => {
	try {
		const params = new URLSearchParams({ clientNumber: clientNumber.toString(), deletionMark: "0" });
		const response = await fetch(`https://www.hella.com/webEdiPersistence/labs/getLabsByClientAndDeletionMark?${params}`, {
			method: "GET",
			headers: {
				accept: "application/json",
				SecurityToken: SECURITY_TOKEN,
			},
		});

		if (response.status === 401) {
			const error: APIError = { status: "error", message: "Unauthorized" };
			return error;
		}

		const labs = await response.json();
		return labsArraySchema.parse(labs);
	} catch (error: any) {
		const apiError: APIError = { status: "error", message: error.message || "An error occurred" };
		return apiError;
	}
};
