import { sharedPages, superAdminPages } from "@/lib/pages";
import { User } from "@/lib/types";
import { SidebarGroup, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "../ui/sidebar";
import Link from "next/link";

interface SidebarLinksProps {
	user: User;
}

const SidebarLinks = ({ user }: SidebarLinksProps) => {
	return (
		<SidebarGroup>
			<SidebarMenu>
				{superAdminPages.map((item) => (
					<SidebarMenuItem key={item.path}>
						<SidebarMenuButton
							asChild
							className="transition-colors hover:bg-accent">
							<Link
								href={item.path}
								className="text-nowrap">
								{item.icon && <item.icon className="size-6" />}

								{item.name}
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
				))}
			</SidebarMenu>
		</SidebarGroup>
	);
};

export default SidebarLinks;
