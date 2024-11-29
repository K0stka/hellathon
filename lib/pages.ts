import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { Home, Users, Package, Activity, Truck, BrickWall } from "lucide-react";

interface PageInfo {
	name: string;
	path: string;
	icon?: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
	hidden?: true;
}

export const pages: { 3333: PageInfo[]; 4444: PageInfo[]; 6666: PageInfo[]; 8888: PageInfo[] } = {
	3333: [],
	4444: [],
	6666: [
		{
			name: "Uživatelé",
			path: "/users6",
			icon: Users,
		},
		{
			name: "Materiály",
			path: "/labs6",
			icon: BrickWall,
		},
		{
			name: "Elektronické zásilky",
			path: "/shipments6",
			icon: Package,
		},
	],
	8888: [
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
	],
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
		name: "Domovská stránka",
		path: "/",
		icon: Home,
	},
	{
		name: "Profil",
		path: "/profile",
		hidden: true,
	},
];
