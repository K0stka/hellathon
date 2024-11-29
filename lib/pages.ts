import { LucideProps, Sparkle } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface PageInfo {
	name: string;
	path: string;
	icon?: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
}

export const publicPages: PageInfo[] = [
	{
		name: "Přihlášení",
		path: "/",
	},
	{
		name: "Obnova hesla",
		path: "/reset-password",
	},
];

export const sharedPages: PageInfo[] = [
	{
		name: "Profil",
		path: "/profile",
	},
];

export const superAdminPages: PageInfo[] = [
	{
		name: "Root",
		path: "/",
		icon: Sparkle,
	},
	{
		name: "Dodavatelé",
		path: "/suppliers",
		icon: Sparkle,
	},
	{
		name: "Uživatelé",
		path: "/users",
		icon: Sparkle,
	},
	{
		name: "Materiály",
		path: "/labs",
		icon: Sparkle,
	},
	{
		name: "Elektronické zásilky",
		path: "/shipments",
		icon: Sparkle,
	},
	{
		name: "Záznamy o činnosti",
		path: "/logs",
		icon: Sparkle,
	},
];
