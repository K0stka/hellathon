import { AuthContext } from "@/auth/context";
import { AuthUser } from "@/lib/types";
import { NextPage } from "next";
import { useContext } from "react";
import { Placeholder } from "@/app/private/shared/page";

const SomePage: NextPage = () => {
	return (
		<div>
			<Placeholder text="záznamy o činnosti a historii dodavatele" />
			<p>přihlášení všech uživatelů, čtení, tvorba zásilek,.... </p>
			<b>možnost CDE jakéhokoliv uživatele</b>
			<br></br>
		</div>
	);
};

export default SomePage;
