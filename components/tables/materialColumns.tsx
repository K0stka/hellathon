"use client";

import { Supplier } from "@/lib/types";
import { ColumnDef } from "@tanstack/react-table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { ArrowUpDown, Mail, MoreHorizontal, Phone } from "lucide-react";
import { deleteSupplier } from "@/api/api";
import { redirect } from "next/navigation";
import { Lab } from "@/lib/types";
import { labsArraySchema } from "@/lib/zod";

export const materialColumns: ColumnDef<Lab>[] = [
	{
		accessorKey: "id",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
					id
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
	},
	{
		id: "customerDescription",
		header: "customerDescription",
		cell: ({ row }) => {
			return (
				<div>
					{row.original.id}, {row.original.clientNumber},{row.original.deletionMark}
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
						<DropdownMenuItem
							onSelect={() => {
								alert("TODO");
							}}>
							Upravit
						</DropdownMenuItem>
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
