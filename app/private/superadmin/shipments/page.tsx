import { AuthContext } from "@/auth/context";
import { AuthUser } from "@/lib/types";
import { NextPage } from "next";
import { useContext } from "react";
import { Placeholder } from "@/app/private/superadmin/page";
import { Shipment } from "@/lib/types";
import UserList from "@/components/UserList";
import { asdf } from "./actions";

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

const ZasilkaCreateWidget = () => {
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
