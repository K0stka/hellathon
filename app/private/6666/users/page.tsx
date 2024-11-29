import { NextPage } from "next";
import ErrorPage from "@/components/utility/ErrorPage";
import Link from "next/link";
import PageTemplate from "@/components/utility/PageTemplate";
import { Button } from "@/components/ui/button";
import { UserIdList } from "./actions";
import { getSessionUser } from "@/auth/session";
import { AuthUser } from "@/lib/types";
import { DataTable } from "@/components/tables/DataTable";
import { userColumns } from "@/components/tables/userColumns";
import { getAllUsers } from "@/api/api";

const SomePage: NextPage = async () => {
	const users = await getAllUsers();

	return (
		<PageTemplate title="Uživatelé">
			{"status" in users ? (
				<ErrorPage error={users.message} />
			) : (
				<>
					<DataTable
						columns={userColumns}
						data={users}
						searchPlaceholder="Hledat uživatele..."
						searchColumn="name"
						actionPath="/users/add"
						actionText="Přidat uživatele"
					/>
				</>
			)}
		</PageTemplate>
	);
};

export default SomePage;
