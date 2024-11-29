"use client";

import { getSuppliersOfClientWithId } from "@/api/api";
import { clientEnv } from "@/clientSafeEnv";
import PageTemplate from "@/components/PageTemplate";
import { Select, SelectContent, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Supplier } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { NextPage } from "next";
import { redirect } from "next/navigation";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
	name: z.string().min(3),
	loginName: z.string().min(3),
	description: z.string(),
	password: z.string().min(8),
	supplierId: z.string(),
});

const AddSupplierPage: NextPage = () => {
	const form = useForm<z.infer<typeof schema>>({ resolver: zodResolver(schema) });
	const [error, setError] = useState<string | null>(null);
	const [suppliers, setSuppliers] = useState<{ value: string; label: string }[] | null>(null);

	useEffect(() => {
		const getSuppliers = async () => {
			const suppliers = await getSuppliersOfClientWithId(clientEnv.CLIENT_ID);

			if ("message" in suppliers) setError(suppliers.message);
			else setSuppliers(suppliers.map((supplier: Supplier) => ({ value: supplier.id.toString(), label: supplier.name })));
		};
		getSuppliers();
	}, []);

	const onSubmit = async (data: z.infer<typeof schema>) => {
		console.log(data);
		// data.supplierId = parseInt(data.supplierId, 10);
		// createSupplierAdmin(name = data.name)), (loginName = data.loginName), (description = data.description), (password = data.password), (supplierId = data.supplierId);
		// const { supplierId, ...rest } = data;
		// console.log(rest);
		// console.log(suppliers.find((supplier) => supplier.id === data.supplierId));
		// const response = await createSupplierAdmin(rest, supplierId);
		const response = { message: "TBI" };

		if ("message" in response) {
			setError(response.message);
		} else {
			redirect("/users");
		}
	};

	return (
		<PageTemplate
			title="Přidat správce dodavatele"
			backPath="/users">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Jméno</FormLabel>
								<FormControl>
									<Input
										placeholder="Jméno a Příjmení"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="loginName"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Přihlašovací jméno</FormLabel>
								<FormControl>
									<Input
										placeholder="Přihlašovací jméno"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="description"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Popis</FormLabel>
								<FormControl>
									<Input
										placeholder="Popis"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Heslo</FormLabel>
								<FormControl>
									<Input
										type="password"
										placeholder="Heslo"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="supplierId"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Dodavatel</FormLabel>
								{/* {...field} */}
								<FormControl>
									{suppliers ? (
										<Select>
											<SelectTrigger>
												<SelectValue placeholder="Zvolte dodavatele" />
											</SelectTrigger>
											<SelectContent>
												{suppliers.map((supplier) => (
													<SelectItem
														key={supplier.value}
														value={supplier.value}>
														{supplier.label}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
									) : (
										<div>
											<Button
												disabled
												variant="outline">
												Načítání...
											</Button>
										</div>
									)}
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type="submit">Přidat uživatele</Button>
					{/* <button type="submit">Přidat uživatele</button> */}
				</form>
			</Form>
		</PageTemplate>
	);
};

export default AddSupplierPage;
