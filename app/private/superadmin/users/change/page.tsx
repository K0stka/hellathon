"use client";

import PageTemplate from "@/components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
	name: z.string().min(3),
	loginName: z.string().min(3),
	description: z.string(),
	password: z.string().min(12),
});

const AddSupplierPage: NextPage = () => {
	const form = useForm<z.infer<typeof schema>>({ resolver: zodResolver(schema) });

	const onSubmit = async (data: z.infer<typeof schema>) => {};

	return (
		<PageTemplate
			title="Upravit správce dodavatele"
			backPath="/suppliers">
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
								<FormDescription>Jméno a Příjmení nového uživatele</FormDescription>
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
								<FormDescription>Přihlašovací jméno nového uživatele</FormDescription>
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
								<FormDescription>Popis nového uživatele</FormDescription>
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
								<FormDescription>Heslo by mělo mít alespoň 8 znaků a obsahovat kombinaci znaků a čísel</FormDescription>
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
