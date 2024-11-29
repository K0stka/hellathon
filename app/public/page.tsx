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
import FormError from "@/components/forms/FormError";
import Image from "next/image";
import { loginSchema } from "@/lib/utils";

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
		<div className="border-2 border-secondary p-12 rounded-lg flex items-center gap-16 shadow-lg bg-background">
			<Image
				src="/static/logo_blue.jpeg"
				alt="logo"
				width={200}
				height={200}
				className="rounded-xl"
			/>
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
								<FormControl>
									<Input
										placeholder="Přihlašovací jméno"
										{...field}
									/>
								</FormControl>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										type="password"
										placeholder="Heslo"
										{...field}
									/>
								</FormControl>
							</FormItem>
						)}
					/>
					<Button type="submit">Přihlásit se</Button>
					<Link href="/reset-password">Zapomenuté heslo</Link>
				</form>
			</Form>
		</div>
	);
};

export default LoginPage;
