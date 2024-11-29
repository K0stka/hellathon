import { NextPage } from "next";
import { getSuppliersOfClientWithId } from "@/api/api";
import ErrorPage from "@/components/ErrorPage";
import Link from "next/link";
import PageTemplate from "@/components/PageTemplate";
import { Button } from "@/components/ui/button";
import { env } from "@/env";

const SomePage: NextPage = async () => {
	const suppliers = await getSuppliersOfClientWithId(env.CLIENT_ID);

	return (
		<PageTemplate title="Dodavatelé">
			{"status" in suppliers ? (
				<ErrorPage error={suppliers.message} />
			) : (
				<>
					{suppliers.map((supplier) => (
						<div>
							<div key={supplier.id}>{supplier.email}</div>
							<br></br>
						</div>
					))}
					<Link href="/suppliers/add">
						<Button>Přidat dodavatele</Button>
					</Link>
				</>
			)}
		</PageTemplate>
	);
};

export default SomePage;
