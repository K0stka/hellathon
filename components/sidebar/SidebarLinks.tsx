import { sharedPages, pages } from "@/lib/pages";
import { AuthUser } from "@/lib/types";
import { SidebarGroup, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "../ui/sidebar";
import Link from "next/link";

interface SidebarLinksProps {
	user: AuthUser;
}

const SidebarLinks = ({ user }: SidebarLinksProps) => {
	return (
		<SidebarGroup>
			<SidebarMenu>
				{sharedPages
					.filter((item) => !item.hidden)
					.map((item) => (
						<SidebarMenuItem key={item.path}>
							<SidebarMenuButton
								asChild
								className="transition-colors hover:bg-accent text-1xl">
								<Link
									href={item.path}
									className="text-nowrap">
									{item.icon && <item.icon className="size-6" />}

									{item.name}
								</Link>
							</SidebarMenuButton>
						</SidebarMenuItem>
					))}
				{user.roles.map((role) =>
					pages[role]
						.filter((item) => !item.hidden)
						.map((item) => (
							<SidebarMenuItem key={item.path}>
								<SidebarMenuButton
									asChild
									className="transition-colors hover:bg-accent text-1xl">
									<Link
										href={item.path}
										className="text-nowrap">
										{item.icon && <item.icon className="size-6" />}

										{item.name}
									</Link>
								</SidebarMenuButton>
							</SidebarMenuItem>
						))
				)}
			</SidebarMenu>
		</SidebarGroup>
	);
};

export default SidebarLinks;
