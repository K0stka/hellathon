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
import { authenticateUser, getAllUsers, getUserGroupsBySupplierId } from "@/api/api";
import NotImplementedPage from "@/components/utility/NotImplementedPage";

const SomePage: NextPage = async () => {
	const user = (await getSessionUser()) as AuthUser;
	const userList = await getUserGroupsBySupplierId(user.id.toString());

	// return <h1>{userList}</h1>;
	// const users = None;

	return <NotImplementedPage />;

	// return (
	// 	<PageTemplate title="Uživatelé">
	// 		{"status" in users ? (
	// 			<ErrorPage error={users.message} />
	// 		) : (
	// 			<>
	// 				<DataTable
	// 					columns={userColumns}
	// 					data={users}
	// 					searchPlaceholder="Hledat uživatele..."
	// 					searchColumn="name"
	// 					actionPath="/users/add"
	// 					actionText="Přidat uživatele"
	// 				/>
	// 			</>
	// 		)}
	// 	</PageTemplate>
	// );
};

export default SomePage;
