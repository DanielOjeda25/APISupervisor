import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { optionsRubros } from "../utils/gondolasUtils";
import BackButton from "./BotomBack";
import axios from "axios";
import Spinner from "./spinner";
import ImagenInput from "./ImagenInput";
import Submit from "./Submit";
import SelectOptions from "./SelectOptions";

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
	} = useForm({
		mode: "onBlur",
	});

	useEffect(() => {
		fetchData();
	}, []);
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
	const postGondolas = async () => {
		const formData = new FormData();
		formData.append("rubro", rubrosSeleccionado);
		formData.append("nombre", clientesSeleccionado);
		formData.append("imagen", imagenSeleccionada);
		try {
			await axios.post("http://10.211.55.5:8080/gondolas", formData, {
				headers: {
					"Content-Type": "application/json",
				},
			});
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
	const onSubmit = async () => {
		const data = {
			rubro: rubrosSeleccionado,
			cliente: clientesSeleccionado,
			imagen: imagenSeleccionada,
		};

		console.log(data);
		await postGondolas();
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
						<SelectOptions
							label={"Rubros: "}
							options={optionsRubros}
							value={rubrosSeleccionado}
							onChange={handleRubrosChange}
							error={errors}
						/>
						<div className="mb-4">
							<label htmlFor="clientes" className="block mb-2 font-bold">
								Clientes:
							</label>
							<select
								required
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
							<ImagenInput handleImagenChange={handleImagenChange} />
							{errors.imagen && (
								<span className="text-red-500">Campo requerido</span>
							)}
							{imagenSeleccionada && (
								<>
									<div className="relative">
										{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
										<p
											className="absolute top-1 right-2 bg-white rounded-full text-red-600 text-2xl "
											onClick={() => setImagenSeleccionada(null)}
										>
											&#10007;
										</p>
										<img
											src={URL.createObjectURL(imagenSeleccionada)}
											alt="Imagen seleccionada"
											className="w-full h-auto"
										/>
									</div>
								</>
							)}
						</div>
						<Submit />
					</form>
				</>
			)}
		</div>
	);
}

export default Gondolas;
