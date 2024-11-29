"use server";

import { Supplier } from "@/lib/types";
import { CreateSupplier } from "@/lib/types";

export async function deleteSupplier(id: number) {
	deleteSupplier(id);
}

export async function createSupplier(supplierData: CreateSupplier) {
	createSupplier(supplierData);
}
