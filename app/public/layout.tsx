import { NextLayout } from "@/lib/utility";

const Layout: NextLayout = ({ children }) => {
	return (
		<main className="flex items-center justify-center w-screen min-h-screen">
			<div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#3f3efd_100%)] dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
			{children}
		</main>
	);
};

export default Layout;
