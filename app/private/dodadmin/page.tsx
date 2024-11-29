import { NextPage } from "next";
import UserList from "@/components/UserList";
import { getSessionUser } from "@/auth/session";
import { Shipment } from "@/lib/types";

const SomePage = async () => {
	const user = await getSessionUser(); // Vždy by měl být definovaný

	return (
		<div>
			{user?.name}
			<UserList nameList={["a", "b", "c"]} />
			<br></br>
		</div>
	);
};
export default SomePage;
