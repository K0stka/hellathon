import { NextPage } from "next";
import { getSessionUser } from "@/auth/session";
import Image from "next/image";
import Avatar from "@/components/user/Avatar";
import { AuthUser } from "@/lib/types";
import { pages, sharedPages } from "@/lib/pages";
import Link from "next/link";

const HomePage: NextPage = async () => {
	const user = (await getSessionUser()) as AuthUser;

	return (
		<main className="w-full h-screen flex items-center justify-center flex-col gap-10">
			<h1 className="font-bold text-2xl flex items-center gap-2">
				Vítej,
				<span className="text-base">
					<Avatar user={user} />
				</span>
				{user.name}!
			</h1>
			<div className="grid grid-cols-5 justify-center items-center gap-4 content-center justify-items-center">
				{user.roles.map((role) =>
					pages[role].map((page) => (
						<Link href={page.path}>
							<div className="aspect-square size-40 border-2 shadow-lg rounded-full grid grid-rows-[auto,auto] content-center items-center justify-items-center gap-0">
								{page.icon && <page.icon className="size-16" />}
								<span className="text-center font-bold text-wrap w-3/5">{page.name}</span>
							</div>
						</Link>
					))
				)}
			</div>
		</main>
	);
};

export default HomePage;
