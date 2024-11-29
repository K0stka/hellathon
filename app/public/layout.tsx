import { NextLayout } from "@/lib/utility";

const Layout: NextLayout = ({ children }) => {
	return <main className="flex items-center justify-center w-screen min-h-screen">{children}</main>;
};

export default Layout;
