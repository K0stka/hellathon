"use server";

import { getAllUsers } from "@/api/api";

export async function UserIdList() {
	return getAllUsers();
}

export async function getSupplierList() {
	//const supplierList = getSuppliersOfClientWithId("41");
	//return validSuppliers.map((supplier) => supplier.name);
}
