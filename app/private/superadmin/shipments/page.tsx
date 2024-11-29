import { AuthContext } from "@/auth/context";
import { AuthUser } from "@/lib/types";
import { useContext } from "react";
import { Placeholder } from "@/app/private/superadmin/page";
import { Shipment } from "@/lib/types";
import UserList from "@/components/UserList";
import { asdf } from "./actions";
import { login } from "@/auth/actions";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { NextPage } from "next";
// import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// import { useState } from "react";
import Link from "next/link";

const zasilka: Shipment = {
	id: 123,
	clientNumber: "clientNumber",
	supplierNumber: "supplierNumber",
	customerNumber: "customerNumber",
	status: 456,
	creationDate: "creationDate",
	plantDescription: "plantDescription",
	shipmentNumber: "shipmentNumber",
	packagingType: "packagingType",
	qtyInPackage: "qtyInPackage",
	shipmentGrossWeight: 789,
	shipmentNetWeight: 102,
	supplierPlant: "supplierPlant",
	supplierPlantCountry: "supplierPlantCountry",
	supplierPlantZipCode: "supplierPlantZipCode",
	estimatedArrivalDate: "estimatedArrivalDate",
	estimatedArrivalTime: "estimatedArrivalTime",
	inCoTerms: "inCoTerms",
	transportMode: "transportMode",
	transportKey: "transportKey",
	transportNumber: "transportNumber",
	transportType: "transportType",
	hazardousGoods: "hazardousGoods",
	transportPartnerNo: "transportPartnerNo",
	carrier: "carrier",
	updatedAt: "updatedAt",
	updatedBy: "updatedBy",
	createdAt: "createdAt",
	createdBy: "createdBy",
	shipmentDate: "shipmentDate",
	shipmentTime: "shipmentTime",
	plantNumber: "plantNumber",
	kindOfTransport: "kindOfTransport",
	orderingKey: "orderingKey",
	unitOfMeasure: "unitOfMeasure",
	serialLabelNoPrefix: 345,
};

const zasilky = [zasilka, zasilka, zasilka];

interface ZasilkaWidgetProps {
	zasilka: Shipment;
}

const ZasilkaWidget = (props: ZasilkaWidgetProps) => {
	return (
		<div>
			<h1>Shipment no. {props.zasilka.shipmentNumber}</h1>
			<p>tadz si potom hezky nastylujeme Zásilku. máme přístup k celému objektu zásilky, jenom si vybrat, co chceme</p>
		</div>
	);
};

const schema = z.object({});

const ZasilkaCreateWidget = () => {
	// const [error, setError] = useState<string | null>(null);

	// const form = useForm<z.infer<typeof schema>>({
	// 	resolver: zodResolver(schema),
	// 	defaultValues: {
	// 		loginName: "",
	// 		password: "",
	// 	},
	// });

	async function onSubmit(values: z.infer<typeof schema>) {
		// const response = await login(values);
		// if (response.error) setError(response.error);
	}

	return (
		<div>Pls work</div>
		// <Form {...form}>
		// 	<form
		// 		onSubmit={form.handleSubmit(onSubmit)}
		// 		className="flex flex-col gap-2">
		// 		<h1 className="font-bold text-2xl">Prosím přihlaste se</h1>
		// 		{error && <p className="text-red-500">{error}</p>}
		// 		<FormField
		// 			control={form.control}
		// 			name="loginName"
		// 			render={({ field }) => (
		// 				<FormItem>
		// 					<FormLabel>Přihlašovací jméno</FormLabel>
		// 					<FormControl>
		// 						<Input
		// 							placeholder="Přihlašovací jméno"
		// 							{...field}
		// 						/>
		// 					</FormControl>
		// 					<FormDescription>Zadejte své přihlašovací jméno</FormDescription>
		// 				</FormItem>
		// 			)}
		// 		/>
		// 		<FormField
		// 			control={form.control}
		// 			name="password"
		// 			render={({ field }) => (
		// 				<FormItem>
		// 					<FormLabel>Heslo</FormLabel>
		// 					<FormControl>
		// 						<Input
		// 							type="password"
		// 							placeholder="Heslo"
		// 							{...field}
		// 						/>
		// 					</FormControl>
		// 					<FormDescription>Zadejte své heslo</FormDescription>
		// 				</FormItem>
		// 			)}
		// 		/>
		// 		<Button type="submit">Přihlásit se</Button>
		// 		<Link href="/reset-password">Obnova hesla</Link>
		// 	</form>
		// </Form>
	);

	return (
		<div>
			<h1>Vytvořte novou zásilku</h1>
			<input alt="asdf" />
			<button onClick={asdf}>submit</button>
		</div>
	);
};

const SomePage: NextPage = () => {
	return (
		<div>
			<Placeholder text="elektronické zásilky od dodavatelů - rd" />
			<p>zásilka je taky objekt s spoustou vlastností</p>
			<p>componentu pise michael</p>
			<br></br>
			<UserList nameList={zasilky.map((z) => z.shipmentNumber)} />
			<hr />
			<ZasilkaCreateWidget />
		</div>
	);
};

export default SomePage;
