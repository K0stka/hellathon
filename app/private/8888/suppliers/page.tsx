import { NextPage } from "next";
import { getSuppliersOfClientWithId } from "@/api/api";
import ErrorPage from "@/components/utility/ErrorPage";
import Link from "next/link";
import PageTemplate from "@/components/utility/PageTemplate";
import { Button } from "@/components/ui/button";
import { env } from "@/env";
import { DataTable } from "@/components/tables/DataTable";
import { supplierColumns } from "@/components/tables/suppliersColumns";

const SomePage: NextPage = async () => {
	const suppliers = await getSuppliersOfClientWithId(env.CLIENT_ID);

	console.log(suppliers);

	return (
		<PageTemplate title="Dodavatelé">
			{"status" in suppliers ? (
				<ErrorPage error={suppliers.message} />
			) : (
				<>
					<DataTable
						columns={supplierColumns}
						data={suppliers}
						searchPlaceholder="Hledat dodavatele..."
						searchColumn="name"
						actionPath="/suppliers/add"
						actionText="Přidat dodavatele"
					/>
				</>
			)}
		</PageTemplate>
	);
};

export default SomePage;
