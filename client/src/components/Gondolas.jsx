import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { optionsRubros } from "../utils/gondolasUtils";
import BackButton from "./BotomBack";
import axios from "axios";
import Spinner from "./spinner";
function Gondolas() {
	const [data, setData] = useState([]);
	const [rubrosSeleccionado, setRubrosSeleccionado] = useState("");
	const [clientesSeleccionado, setClientesSeleccionado] = useState("");
	const [imagenSeleccionada, setImagenSeleccionada] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			try {
				const response = await axios("http://10.211.55.5:8080/idClientes");
				setData(response.data);
			} catch (error) {
				console.error(error);
				alert("Ha ocurrido un error al cargar los clientes.");
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, []);
	const onSubmit = async () => {
		const data = {
			rubro: rubrosSeleccionado,
			cliente: clientesSeleccionado,
			imagen: imagenSeleccionada,
		};

		console.table(data);
		const formData = new FormData();
		formData.append("rubro", rubrosSeleccionado);
		formData.append("nombre", clientesSeleccionado);
		formData.append("imagen", imagenSeleccionada);

		try {
			const response = await axios.post(
				"http://10.211.55.5:8080/gondolas",
				formData,
				{
					headers: {
						"Content-Type": "application/json",
					},
				},
			);
			alert("¡El formulario se ha enviado correctamente!");
		} catch (error) {
			console.error(error);
			alert("Ha ocurrido un error al enviar el formulario.");
		} finally {
			setImagenSeleccionada(null);
			setClientesSeleccionado("");
			setRubrosSeleccionado("");
		}
	};

	function generateKey() {
		return Math.random().toString(36).substring(2);
	}
	const handleRubrosChange = (event) => {
		setRubrosSeleccionado(event.target.value);
	};

	const handleClientesChange = (event) => {
		setClientesSeleccionado(event.target.value);
	};
	const handleImagenChange = (event) => {
		setImagenSeleccionada(event.target.files[0]);
	};
	return (
		<div className="flex justify-center items-center h-screen bg-gray-800 flex-col">
			{isLoading ? (
				<Spinner />
			) : (
				<>
					<BackButton />
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="max-w-md mx-auto border border-gray-200 p-6 rounded-lg bg-slate-100"
					>
						<div className="mb-4">
							<label htmlFor="rubros" className="block mb-2 font-bold">
								Rubros:
							</label>
							<select
								id="rubros"
								{...register("rubros", { required: true })}
								value={rubrosSeleccionado}
								onChange={handleRubrosChange}
								className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
							>
								<option value="">Seleccione un rubro</option>
								{optionsRubros.map((option) => (
									<option key={option.value} value={option.value}>
										{option.value}
									</option>
								))}
							</select>
							{errors.rubros && (
								<span className="text-red-500">Campo requerido</span>
							)}
						</div>
						<div className="mb-4">
							<label htmlFor="clientes" className="block mb-2 font-bold">
								Clientes:
							</label>
							<select
								id="clientes"
								{...register("clientes", { required: true })}
								value={clientesSeleccionado}
								onChange={handleClientesChange}
								className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
							>
								<option value="">Seleccione un cliente</option>
								{data.map((option) => (
									<option key={generateKey()} value={option.value}>
										{option.nombre}
									</option>
								))}
							</select>
							{errors.clientes && (
								<span className="text-red-500">Campo requerido</span>
							)}
						</div>
						<div className="mb-4">
							<label className="block mb-2 font-bold" htmlFor="imagen">
								Imagen:
							</label>
							<input
								{...register("imagen", { required: true })}
								onChange={handleImagenChange}
								className="block w-full mb-5 text-xs text-gray-900  rounded cursor-pointer bg-gray-50 focus:outline-none"
								id="imagen"
								type="file"
							/>
							{errors.imagen && (
								<span className="text-red-500">Campo requerido</span>
							)}
							{imagenSeleccionada && (
								<img
									src={URL.createObjectURL(imagenSeleccionada)}
									alt="Imagen seleccionada"
									className="w-full h-auto"
								/>
							)}
						</div>

						<button
							type="submit"
							className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
						>
							<svg
								className="w-4 h-4 mr-2 text-white inline-block align-text-bottom"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
							>
								<path fill="currentColor" d="M10 0l8 8h-6v12h-4v-12h-6l8-8z" />
							</svg>
							Enviar
						</button>
					</form>
				</>
			)}
		</div>
	);
}

export default Gondolas;
