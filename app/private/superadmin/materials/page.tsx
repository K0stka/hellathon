import { AuthContext } from "@/auth/context";
import { AuthUser } from "@/lib/types";
import { NextPage } from "next";
import { useContext } from "react";
import { Placeholder } from "@/app/private/superadmin/page";
import UserList from "@/components/UserList";

const SomePage: NextPage = () => (
	<div>
		<Placeholder text="list pozadovanych materialu od dodavatelu - rd" />
		<p>materiál je objekt s spoustu vlastností, napsat k tomu zobrazovací widget</p>
		<UserList nameList={["material 1", "material 2", "material 3"]} />

		<br></br>
	</div>
);

export default SomePage;
