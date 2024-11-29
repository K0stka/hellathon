import { ChevronLeft } from "lucide-react";
import Link from "next/link";

interface PageTemplateProps {
	title: string;
	children: React.ReactNode;
	backPath?: string;
}

const PageTemplate = ({ title, children, backPath }: PageTemplateProps) => {
	return (
		<main className="p-5 grid grid-rows-[auto,1fr] w-full h-screen overflow-y-auto gap-3 ">
			<h1 className="text-3xl font-bold">
				{backPath && (
					<Link
						href={backPath}
						className="flex gap-2 relative -left-2 text-base mb-5 opacity-30">
						<ChevronLeft />
						Zpět
					</Link>
				)}
				{title}
			</h1>
			<div className="flex items-center">{children}</div>
		</main>
	);
};

export default PageTemplate;
