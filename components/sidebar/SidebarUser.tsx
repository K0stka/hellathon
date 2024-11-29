"use client";

import { Bell, ChevronsUpDown, LogOut, Moon, Settings, Sun } from "lucide-react";

import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar";
import { logout } from "@/auth/actions";
import { User } from "@/lib/types";
import Link from "next/link";
import { DialogTrigger } from "@radix-ui/react-dialog";
import Avatar from "../user/Avatar";
import ThemePicker from "../theme/ThemePicker";

type SidebarUserProps = {
	user: User;
};

export function SidebarUser({ user }: SidebarUserProps) {
	const { isMobile } = useSidebar();

	return (
		<SidebarMenu className="rounded-sm transition-colors hover:bg-secondary">
			<SidebarMenuItem>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<SidebarMenuButton
							size="lg"
							className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
							<Avatar user={user} />
							<div className="grid flex-1 text-left text-sm leading-tight">
								<span className="truncate font-semibold">{user.name}</span>
								{/* <span className="truncate text-xs">{user.email}</span> */}
							</div>
							<ChevronsUpDown className="ml-auto size-4" />
						</SidebarMenuButton>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
						side={isMobile ? "bottom" : "right"}
						align="end"
						sideOffset={4}>
						<DropdownMenuLabel className="select-none p-0 font-normal">
							<div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
								<Avatar user={user} />
								<div className="grid flex-1 text-left text-sm leading-tight">
									<span className="truncate font-semibold">{user.name}</span>
									{/* <span className="truncate text-xs">{user.email}</span> */}
								</div>
							</div>
						</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<ThemePicker variant="sidebar" />
						<DropdownMenuSeparator />
						<DropdownMenuGroup>
							<Link href="/profile">
								<DropdownMenuItem className="cursor-pointer">
									<Settings />
									Nastavení
								</DropdownMenuItem>
							</Link>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuItem
							className="cursor-pointer"
							onClick={logout}>
							<LogOut />
							Odhlásit se
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</SidebarMenuItem>
		</SidebarMenu>
	);
}