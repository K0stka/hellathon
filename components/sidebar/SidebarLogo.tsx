import { Sparkles } from "lucide-react";
import { SidebarMenu, SidebarMenuItem } from "../ui/sidebar";
import Image from "next/image";

const SidebarLogo = () => {
	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<h1 className="nunito font-extrabold flex flex-row items-center gap-3 overflow-hidden text-2xl data-[state=open]:py-3">
					<Image
						src="/static/logo_blue.jpeg"
						alt="Logo"
						width={30}
						height={30}
						className="rounded"
					/>
					Portal
				</h1>
			</SidebarMenuItem>
		</SidebarMenu>
	);
};

export default SidebarLogo;
