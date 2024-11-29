import { NextPage } from "next";
import { getAllLabs } from "@/api/api";
import ErrorPage from "@/components/ErrorPage";
import Link from "next/link";
import PageTemplate from "@/components/PageTemplate";
import { Button } from "@/components/ui/button";
import { env } from "@/env";

const SomePage: NextPage = async () => {
	const materials = await getAllLabs(env.CLIENT_ID);

	return (
		<PageTemplate title="Materiály">
			{"status" in materials ? (
				<ErrorPage error={materials.message} />
			) : (
				<>
					{materials.map((material) => (
						<div>
							<div key={material.id}>{material.id}</div>
							<br></br>
						</div>
					))}
				</>
			)}
		</PageTemplate>
	);
};

export default SomePage;
