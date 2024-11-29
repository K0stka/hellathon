import { NextPage } from "next";
import { getAllLabs } from "@/api/api";
import ErrorPage from "@/components/utility/ErrorPage";
import Link from "next/link";
import PageTemplate from "@/components/utility/PageTemplate";
import { Button } from "@/components/ui/button";
import { env } from "@/env";
import { DataTable } from "@/components/tables/DataTable";
import { materialColumns } from "@/components/tables/materialColumns";

const SomePage: NextPage = async () => {
	const materials = await getAllLabs(env.CLIENT_NUMBER);

	return (
		<PageTemplate title="Materiály">
			{"status" in materials ? (
				<ErrorPage error={materials.message} />
			) : (
				<>
					<DataTable
						columns={materialColumns}
						data={materials}
						searchPlaceholder="Hledat materiál..."
						searchColumn="plantDescription"
						// actionPath="/labs"
						// actionText="nic nepřidáš"
					/>
				</>
			)}
		</PageTemplate>
	);
};

export default SomePage;
