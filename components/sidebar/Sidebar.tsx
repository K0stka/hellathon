"use client";

import { Sidebar as ShadCnSidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/ui/sidebar";

import { useContext } from "react";
import { AuthContext } from "@/auth/context";

import { AuthUser } from "@/lib/types";

import { SidebarUser } from "@/components/sidebar/SidebarUser";
import SidebarLinks from "./SidebarLinks";
import SidebarLogo from "./SidebarLogo";

type SidebarProps = React.ComponentProps<typeof ShadCnSidebar>;

export function Sidebar({ ...props }: SidebarProps) {
	const user = useContext(AuthContext) as AuthUser;

	return (
		<ShadCnSidebar
			collapsible="icon"
			{...props}
			className="select-none bg-secondary/50">
			<SidebarHeader>
				<SidebarLogo />
			</SidebarHeader>
			<SidebarContent>
				<SidebarLinks user={user} />
			</SidebarContent>
			<SidebarFooter>
				<SidebarUser user={user} />
			</SidebarFooter>
			<SidebarRail />
		</ShadCnSidebar>
	);
}
