import {useNavigate} from 'react-router-dom'

function Button({ label, onClick }) {
	return (
		<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onClick}>
			{label}
		</button>
	);
}

const Home = () => {
	const navigate = useNavigate()
	const handleGondolasClick = () => {
    navigate('/gondolas');
  };

  const handleSeguimientoComercialClick = () => {
    navigate('/comercial');
  };

  const handleActualizacionClick = () => {
    navigate('/actualizacion');
  };

	return (
		<>
			<div className="flex flex-col sm:flex-row items-center justify-center h-screen bg-slate-800">
				<Button label="Góndolas"  nav={'gondolas'} className="my-2 sm:my-0 sm:mx-2" onClick={handleGondolasClick} />
				<div className="h-6"  />
				<Button
					label="Seguimiento Comercial"
					className="my-2 sm:my-0 sm:mx-2"
					onClick={handleSeguimientoComercialClick}
				/>
				<div className="h-6" />
				<Button label="Actualización" className="my-2 sm:my-0 sm:mx-2" onClick={handleActualizacionClick}/>
			</div>
		</>
	);
};
export default Home;
