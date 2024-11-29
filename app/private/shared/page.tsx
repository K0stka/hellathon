import { NextPage } from "next";
import UserList from "@/components/UserList";
import { getSessionUser } from "@/auth/session";
import { Shipment } from "@/lib/types";
import RedirectButton from "@/components/RedirectButton";

interface PlaceholderProps {
	color?: string;
	text?: string;
}

export const Placeholder: NextPage<PlaceholderProps> = (props) => {
	return <div style={{ color: props.color || "purple" }}>PLACEHOLDER {props.text} PLACEHOLDER</div>;
};

const SomePage = async () => {
	const user = await getSessionUser(); // Vždy by měl být definovaný

	return (
		<div>
			<h1>Vítej, {user?.name}</h1>
			{/* <RedirectButton //cc michale
				text="asdf"
				location="asdf" */}
			{/* /> */}
			<Placeholder text="hlavní stránka, třeba nějaký dashboard" />
		</div>
	);
};

// const SomePage: NextPage = () => {
// 	// const user = useContext(AuthContext);
// 	const user = { name: "miguel" };
// 	return <div>{user?.name}</div>;
// };

export default SomePage;
