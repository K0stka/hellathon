"use client";

import { Supplier } from "@/lib/types";
import { ColumnDef } from "@tanstack/react-table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { ArrowUpDown, Mail, MoreHorizontal, Phone } from "lucide-react";
import { deleteSupplier } from "@/api/api";
import { redirect } from "next/navigation";

export const supplierColumns: ColumnDef<Supplier>[] = [
	{
		accessorKey: "name",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
					Jméno
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
	},
	{
		id: "address",
		header: "Adresa",
		cell: ({ row }) => {
			return (
				<div>
					{row.original.streetHouseNumber}, {row.original.city}, {row.original.zipCode}, {row.original.land}
				</div>
			);
		},
	},
	{
		id: "contact",
		header: "Kontakt",
		cell: ({ row }) => {
			return (
				<div>
					{/* <span className="flex gap-1 items-center">
						<Phone size="1em" /> {row.original.phone}
					</span> */}
					<span className="flex gap-1 items-center">
						<Mail size="1em" /> {row.original.email}
					</span>
				</div>
			);
		},
	},
	{
		id: "actions",
		cell: ({ row }) => {
			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button
							variant="ghost"
							className="h-8 w-8 p-0">
							<span className="sr-only">Open menu</span>
							<MoreHorizontal className="h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuItem onSelect={() => {}}>Upravit</DropdownMenuItem>
						<DropdownMenuItem
							className="text-red-500"
							onSelect={() => {
								deleteSupplier(row.original.id);
								redirect("/suppliers");
							}}>
							Smazat
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
