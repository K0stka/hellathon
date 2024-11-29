import { AuthContext } from "@/auth/context";
import { AuthUser } from "@/lib/types";
import { NextPage } from "next";
import { useContext } from "react";
import { Placeholder } from "@/app/private/superadmin/page";
import UserList from "@/components/UserList";
import { deleteSupplier } from "./actions";

const SomePage: NextPage = () => {
	return (
		<div>
			<Placeholder text="list dodavatelu s infem a tlacitkem na pridani dodamina (dodavatelsky admin)" />
			<p>componentu pise tomas</p>
			<UserList
				nameList={["abb", "bbb", "ccc"]}
				onDelete={deleteSupplier}
			/>
			<br></br>
		</div>
	);
};

export default SomePage;
