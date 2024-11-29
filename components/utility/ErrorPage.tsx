interface ErrorPageProps {
	error: string;
}

const ErrorPage = ({ error }: ErrorPageProps) => {
	return (
		<div className="w-full h-full text-red-500 flex items-center justify-center text-bold flex-col text-center">
			<h1 className="text-2xl text-bold">Omlouváme se, ale během generování odpovědi nastala chyba</h1>
			<span>Prosím, kontaktujte správce sítě s následujícími informacemi:</span>
			<span className="border-2 border-destructive p-2 mt-10 rounded select-all">{error}</span>
		</div>
	);
};

export default ErrorPage;
