import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { optionsRubros } from "../utils/gondolasUtils";

const CLIENTES_OPTIONS = [
	{ value: "cliente1", label: "Cliente 1" },
	{ value: "cliente2", label: "Cliente 2" },
	{ value: "cliente3", label: "Cliente 3" },
];

function Gondolas() {
	const [rubrosSeleccionado, setRubrosSeleccionado] = useState("");
	const [clientesSeleccionado, setClientesSeleccionado] = useState("");
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log("Rubros seleccionado: ", rubrosSeleccionado);
		console.log("Clientes seleccionado: ", clientesSeleccionado);
		console.log("Imagen seleccionada: ", imagenSeleccionada);
	};

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
		<div className="flex justify-center items-center h-screen bg-gray-800">
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
						{CLIENTES_OPTIONS.map((option) => (
							<option key={option.value} value={option.value}>
								{option.value}
							</option>
						))}
					</select>
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
