import { Link, useNavigate } from "react-router-dom";

// Componente reutilizable de botón
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

// Componente de la página principal (Home)
const Home = () => {
	// Hook de React Router que permite navegar a otras páginas
	const navigate = useNavigate();

	// Función que se ejecuta al hacer clic en el botón "Góndolas"
	const handleGondolasClick = () => {
		navigate("/gondolas"); // Navegar a la página "/gondolas"
	};

	// Función que se ejecuta al hacer clic en el botón "Seguimiento Comercial"
	const handleSeguimientoComercialClick = () => {
		navigate("/comercial"); // Navegar a la página "/comercial"
	};

	// Función que se ejecuta al hacer clic en el botón "Actualización"
	const handleActualizacionClick = () => {
		navigate("/actualizacion"); // Navegar a la página "/actualizacion"
	};

	return (
		<>
			<div className="flex flex-col sm:flex-col items-center justify-center h-screen bg-slate-800 ">
				<div className="border border-slate-50 w-1/2 h-1/2 justify-center flex items-center flex-col rounded-xl relative">
					<p className="text-slate-100 absolute top-6 font-bold text-l">Bienvenido Supervisor</p>
					<Button
						label="Góndolas"
						className="my-2  sm:my-0 sm:mx-2 w-full sm:w-auto"
						onClick={handleGondolasClick} // Asignar la función handleGondolasClick al evento onClick del botón "Góndolas"
					/>
					<div className="h-6" />
					<Link
						className="my-2 sm:my-0 sm:mx-2  sm:w-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
						to={"http://tablero.bamana.com.ar/comercial"} // Enlazar a la página "http://tablero.bamana.com.ar/comercial" al hacer clic en el botón "Seguimiento Comercial"
					>
						Seguimiento Comercial
					</Link>
				</div>
			</div>
		</>
	);
};

export default Home;
