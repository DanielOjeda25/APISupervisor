import { useNavigate } from "react-router-dom";

function Button({ label, onClick, disabled }) {
	return (
		<button
			disabled={disabled}
			className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
			onClick={onClick}
		>
			{label}
		</button>
	);
}

const Home = () => {
	const navigate = useNavigate();

	const handleGondolasClick = () => {
		navigate("/gondolas");
	};

	const handleSeguimientoComercialClick = () => {
		navigate("/comercial");
	};

	const handleActualizacionClick = () => {
    navigate("/actualizacion");
	};

	return (
		<>
			<div className="flex flex-col sm:flex-col items-center justify-center h-screen bg-slate-800">
				<Button
					label="Góndolas"
					className="my-2 sm:my-0 sm:mx-2 w-full sm:w-auto"
					onClick={handleGondolasClick}
				/>
				<div className="h-6" />
				<Button
					label="Seguimiento Comercial"
					className="my-2 sm:my-0 sm:mx-2 w-full sm:w-auto"
					onClick={handleSeguimientoComercialClick}
					disabled={true}
				/>
				<div className="h-6" />
				<Button
					label="Actualización"
					className="my-2 sm:my-0 sm:mx-2 w-full sm:w-auto"
					onClick={handleActualizacionClick}
					disabled={true}
				/>
			</div>
		</>
	);
};

export default Home;
