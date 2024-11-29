"use client";

import { login } from "@/auth/actions";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import Link from "next/link";
import FormError from "@/components/FormError";

export const loginSchema = z.object({
	loginName: z.string(),
	password: z.string(),
});

const LoginPage: NextPage = () => {
	const [error, setError] = useState<string | null>(null);

	const form = useForm<z.infer<typeof loginSchema>>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			loginName: "",
			password: "",
		},
	});

	async function onSubmit(values: z.infer<typeof loginSchema>) {
		const response = await login(values);
		if (response.error) setError(response.error);
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex flex-col gap-2">
				<h1 className="font-bold text-2xl">Prosím přihlaste se</h1>
				<FormError error={error} />
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
							<FormDescription>Zadejte své přihlašovací jméno</FormDescription>
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
							<FormDescription>Zadejte své heslo</FormDescription>
						</FormItem>
					)}
				/>
				<Button type="submit">Přihlásit se</Button>
				<Link href="/reset-password">Obnova hesla</Link>
			</form>
		</Form>
	);
};

export default LoginPage;
