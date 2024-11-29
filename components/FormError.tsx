interface FormErrorProps {
	error: string | null;
}

const FormError = ({ error }: FormErrorProps) => {
	return error ? <div className="text-red-500">{error}</div> : null;
};

export default FormError;
