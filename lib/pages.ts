import { LucideProps, Sparkle } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { Home, Users, Package, FileText, Activity, Truck, BrickWall } from "lucide-react";

interface PageInfo {
	name: string;
	path: string;
	icon?: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
}

export const pages: { 3333: PageInfo[]; 4444: PageInfo[]; 6666: PageInfo[]; 8888: PageInfo[] } = {
	3333: [],
	4444: [],
	6666: [],
	8888: [],
};

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
		name: "Hlavní stránka",
		path: "/",
		icon: Home,
	},
	{
		name: "Profil",
		path: "/profile",
	},
];

export const superAdminPages: PageInfo[] = [
	{
		name: "Dodavatelé",
		path: "/suppliers",
		icon: Truck,
	},
	{
		name: "Uživatelé",
		path: "/users",
		icon: Users,
	},
	{
		name: "Materiály",
		path: "/labs",
		icon: BrickWall,
	},
	{
		name: "Elektronické zásilky",
		path: "/shipments",
		icon: Package,
	},
	{
		name: "Záznamy o činnosti",
		path: "/logs",
		icon: Activity,
	},
];
