"use client";

import PageTemplate from "@/components/PageTemplate";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { z } from "zod";
import validator from "validator";
import { Button } from "@/components/ui/button";
import { createSupplier } from "@/api/api";
import { clientEnv } from "@/clientSafeEnv";
import { useState } from "react";
import FormError from "@/components/FormError";

const schema = z.object({
	name: z.string().min(3),
	email: z.string().refine(validator.isEmail),
	phone: z.string().refine(validator.isMobilePhone),
	fax: z.string().refine(validator.isMobilePhone),
	streetNumber: z.string().min(3),
	zipCode: z.string().min(3),
	city: z.string().min(3),
	land: z.string().min(3),
});

const ShipmentAddPage: NextPage = () => {
	const [error, setError] = useState<string | null>(null);

	const form = useForm<z.infer<typeof schema>>({
		resolver: zodResolver(schema),
		defaultValues: {
			//supplier, customer
			name: "",
			email: "",
			phone: "",
			fax: "",
			streetNumber: "",
			zipCode: "",
			city: "",
			land: "",
		},
	});

	const onSubmit = async (data: z.infer<typeof schema>) => {
		const response = await createSupplier({
			number: Date.now().toString(),
			clientId: clientEnv.CLIENT_ID,
			name: data.name,
			email: data.email,
			phone: data.phone,
			fax: data.fax,
			streetHouseNumber: data.streetNumber,
			zipCode: data.zipCode,
			city: data.city,
			land: data.land,
		});

		if ("message" in response) {
			setError(response.message);
		} else {
			setError(null);
			form.reset();
		}
	};

	return (
		<PageTemplate
			title="Přidat zásilku"
			backPath="/shipments">
			<Form {...form}>
				<FormError error={error} />
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="w-auto inline-grid grid-cols-2 gap-4 border-2 border-secondary p-5 rounded mx-auto">
					<div className="inline-flex gap-3 flex-col">
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Název dodavatele</FormLabel>
									<FormControl>
										<Input {...field} />
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
										<Input {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="phone"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Telefon</FormLabel>
									<FormControl>
										<Input {...field} />
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
										<Input {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<div className="inline-flex gap-3 flex-col">
						<FormField
							control={form.control}
							name="streetNumber"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Číslo ulice</FormLabel>
									<FormControl>
										<Input {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="zipCode"
							render={({ field }) => (
								<FormItem>
									<FormLabel>PSČ</FormLabel>
									<FormControl>
										<Input {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="city"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Město</FormLabel>
									<FormControl>
										<Input {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="land"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Země</FormLabel>
									<FormControl>
										<Input {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<div className="col-span-2 text-center">
						<Button type="submit">Přidat dodavatele</Button>
					</div>
				</form>
			</Form>
		</PageTemplate>
	);
};

export default ShipmentAddPage;
