interface ErrorPageProps {
	error: string;
}

const ErrorPage = ({ error }: ErrorPageProps) => {
	return <div className="w-full h-full text-red-500 flex items-center justify-center text-bold">Omlouváme se, ale během generování odpovědi nastala chyba: {error}</div>;
};

export default ErrorPage;
