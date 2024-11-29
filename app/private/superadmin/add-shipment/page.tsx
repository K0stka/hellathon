"use client";

import { insertShipment } from "@/api/api";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { shipmentSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { z } from "zod";

const AddShipmentPage: NextPage = () => {
	const form = useForm<z.infer<typeof shipmentSchema>>({
		resolver: zodResolver(shipmentSchema),
	});

	const onSubmit = async (values: z.infer<typeof shipmentSchema>) => {
		await insertShipment(values);
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<FormField
					control={form.control}
					name="clientNumber"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Číslo klienta</FormLabel>
							<FormControl>
								<Input
									placeholder="Číslo klienta"
									{...field}
								/>
							</FormControl>
							<FormDescription>Zadejte číslo klienta</FormDescription>
						</FormItem>
					)}
				/>
			</form>
		</Form>
	);
};

export default AddShipmentPage;
