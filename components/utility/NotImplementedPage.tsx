import { TriangleAlert } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const NotImplementedPage = () => {
	return (
		<main className="w-full h-screen  flex items-center justify-center text-bold">
			<div className="flex border-2 border-secondary rounded items-center justify-center flex-col p-5 gap-5 shadow-lg shadow-secondary bg-background">
				<TriangleAlert size={64} />
				<h1 className="text-2xl">Tato funkce ještě není spuštěna</h1>
				<span className="max-w-xl text-center">Omlouváme se, ale tato funkce ještě není plně dokončena. Prosím zkuste to znovu později nebo případně kontaktujte správce aplikace</span>
				<Link href="/">
					<Button variant="outline">Zpět na úvodní stránku</Button>
				</Link>
			</div>
		</main>
	);
};

export default NotImplementedPage;
