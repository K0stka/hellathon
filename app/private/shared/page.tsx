import { NextPage } from "next";
import { getSessionUser } from "@/auth/session";

const HomePage: NextPage = async () => {
	const user = await getSessionUser(); // Vždy by měl být definovaný

	return (
		<main className="w-full h-screen flex items-center justify-center">
			<h1>Vítej, {user?.name}</h1>
		</main>
	);
};

export default HomePage;
