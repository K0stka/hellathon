
import { Column } from "@/components/tables/DataTable";
import { Lab } from "@/lib/types";

export const materialColumns: Column<Lab>[] = [
	{ header: "ID", accessor: "id" },
	{ header: "Customer Description", accessor: "customerDescription" },
	{ header: "Street House Number", accessor: "customerStreetHouseNumber" },
	{ header: "Land", accessor: "customerLand" },
	{ header: "Zip Code", accessor: "customerZipCode" },
	{ header: "City", accessor: "customerCity" },
	{ header: "Contact Person", accessor: "customerContactPersonName" },
	{ header: "Purchasing Group", accessor: "customerPurchasingGroup" },
	{ header: "Identification", accessor: "customerIdentification" },
	{ header: "Phone", accessor: "customerPhone" },
	{ header: "Fax", accessor: "customerFax" },
	{ header: "Email", accessor: "customerEmail" },
	{ header: "VAT", accessor: "customerVat" },
	{ header: "Customer Number", accessor: "customerNumber" },
	{ header: "Supplier Number", accessor: "supplierNumber" },
	{ header: "Client Number", accessor: "clientNumber" },
	{ header: "Plant Number", accessor: "plantNumber" },