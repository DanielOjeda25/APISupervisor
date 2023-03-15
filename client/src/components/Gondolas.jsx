import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { optionsRubros } from "../utils/gondolasUtils";
import BackButton from "./BotomBack";
import axios from "axios";
import Select, { components } from "react-select";

function Gondolas() {
	const [data, setData] = useState([]);
	const [rubrosSeleccionado, setRubrosSeleccionado] = useState("");
	const [clientesSeleccionado, setClientesSeleccionado] = useState("");
	const [imagenSeleccionada, setImagenSeleccionada] = useState(null);
	const [opcionSeleccionada, setOpcionSeleccionada] = useState("");
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	useEffect(() => {
		const fetchData = async () => {
			await axios("http://10.211.55.5:8080/idClientes").then((response) =>
				setData(response.data),
			);
		};

		fetchData();
	}, []);
	const onSubmit = async () => {
		const data = {
			rubro: rubrosSeleccionado,
			cliente: clientesSeleccionado,
			imagen: imagenSeleccionada,
		};

		console.log(data);
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
			setClientesSeleccionado("");
			setRubrosSeleccionado("");
			setImagenSeleccionada(null);
			setOpcionSeleccionada("");
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
		setOpcionSeleccionada(event.target.value);
	};
	const handleImagenChange = (event) => {
		setImagenSeleccionada(event.target.files[0]);
	};
	/* 	
	const Option = (props) => {
		return (
			<components.Option
				{...props}
				className="bg-white hover:bg-gray-100 px-4 py-2"
			>
				{data.map((option) => (
					<>
						<div className="text-gray-900 font-medium">{option.nombre}</div>
						<div className="text-gray-500 text-xs">supervisor: {option.supervisor}</div>
						<div className="text-gray-500 text-xs">vendedor: {option.vendedor}</div>
						<div className="text-gray-500 text-xs">localidad: {option.nombre_localidad}</div>
					</>
				))}
			</components.Option>
		);
	}; */
	return (
		<div className="flex justify-center items-center h-screen bg-gray-800 flex-col">
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
					{/* <Select options={options} components={{ Option }} />
					 */}
					{errors.clientes && (
						<span className="text-red-500">Campo requerido</span>
					)}
				</div>
				<div className="mb-4">
					<label htmlFor="imagen" className="block mb-2 font-bold">
						Imagen:
					</label>
					<input
						id="imagen"
						type="file"
						{...register("imagen", { required: true })}
						onChange={handleImagenChange}
						className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
					/>
					{errors.imagen && (
						<span className="text-red-500">Campo requerido</span>
					)}
					{imagenSeleccionada && (
						<img
							src={URL.createObjectURL(imagenSeleccionada)}
							alt="Imagen seleccionada"
						/>
					)}
				</div>
				<button
					type="submit"
					className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
				>
					Enviar
				</button>
			</form>
		</div>
	);
}

export default Gondolas;
