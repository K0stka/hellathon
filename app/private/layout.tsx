import { AuthProvider } from "@/auth/context";
import { getSessionUser } from "@/auth/session";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { NextLayout } from "@/lib/utility";

const Layout: NextLayout = async ({ children }) => {
	const user = await getSessionUser();

	return (
		<AuthProvider user={user}>
			<SidebarProvider>
				<Sidebar />
				{children}
			</SidebarProvider>
		</AuthProvider>
	);
};

export default Layout;
