"use client";

import { createSupplierAdmin, getSuppliersOfClientWithId } from "@/api/api";
import { clientEnv } from "@/clientSafeEnv";
import PageTemplate from "@/components/utility/PageTemplate";
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
import FormError from "@/components/forms/FormError";
import validator from "validator";

const schema = z.object({
	name: z.string().min(3),
	loginName: z.string().min(3),
	phone: z.string().refine(validator.isMobilePhone),
	fax: z.string().refine(validator.isMobilePhone),
	mobileNumber: z.string().refine(validator.isMobilePhone),
	email: z.string().refine(validator.isEmail),
	password: z.string().min(8),
	supplierId: z.string(),
});

const AddSupplierPage: NextPage = () => {
	const form = useForm<z.infer<typeof schema>>({
		resolver: zodResolver(schema),
		defaultValues: {
			name: "",
			loginName: "",
			phone: "",
			fax: "",
			mobileNumber: "",
			email: "",
			password: "",
			supplierId: "",
		},
	});
	const [error, setError] = useState<string | null>(null);
	const [suppliers, setSuppliers] = useState<{ value: string; label: string }[] | null>(null);

	useEffect(() => {
		const getSuppliers = async () => {
			const suppliers = await getSuppliersOfClientWithId(clientEnv.CLIENT_ID);

			if ("message" in suppliers) setError(suppliers.message);
			else if (Array.isArray(suppliers)) {
				setSuppliers(suppliers.map((supplier: Supplier) => ({ value: supplier.id.toString(), label: supplier.name })));
			} else {
				setError("Unexpected response format");
			}
		};
		getSuppliers();
	}, []);

	const onSubmit = async (data: z.infer<typeof schema>) => {
		console.log("????????");
		const response = await createSupplierAdmin(
			{
				name: data.name,
				loginName: data.loginName,
				phone: data.phone,
				fax: data.fax,
				mobileNumber: data.mobileNumber,
				email: data.email,
				clientNumber: clientEnv.CLIENT_NUMBER.toString(),
				password: data.password,
			},
			parseInt(data.supplierId)
		);

		if ("message" in response) {
			setError(response.message);
			console.log(response);
		} else {
			redirect("/users");
		}
	};

	return (
		<PageTemplate
			title="Přidat správce dodavatele"
			backPath="/users">
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="w-auto inline-grid grid-cols-2 gap-4 border-2 border-secondary p-5 rounded mx-auto">
					<div className="col-span-2 text-center">
						<FormError error={error} />
					</div>
					<div className="inline-flex gap-3 flex-col">
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
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input
											placeholder="Email"
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
					</div>
					<div className="inline-flex gap-3 flex-col">
						<FormField
							control={form.control}
							name="phone"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Telefon</FormLabel>
									<FormControl>
										<Input
											placeholder="Telefon"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="fax"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Fax</FormLabel>
									<FormControl>
										<Input
											placeholder="Fax"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="mobileNumber"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Mobilní telefon</FormLabel>
									<FormControl>
										<Input
											placeholder="Mobilní telefon"
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
									<FormControl>
										{suppliers ? (
											<Select
												{...field}
												onValueChange={field.onChange}>
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
					</div>
					<div className="col-span-2 text-center">
						<Button type="submit">Přidat uživatele</Button>
					</div>
				</form>
			</Form>
		</PageTemplate>
	);
};

export default AddSupplierPage;
