import React from "react";
import { useForm } from "react-hook-form";
import {
	localidadesOptions,
	preciosOptions,
	tipoCanalOptions,
	tipoClienteOptions,
} from "../utils/ComercialUtils";

export default function Comercial() {
	const { register, handleSubmit } = useForm();
	const [tabla, setTabla] = useState([]);
	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<div className="max-w-sm mx-auto p-4 rounded-lg shadow-md">
			<form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-md">
				<div className="flex flex-col space-y-4">
					<label htmlFor="fecha" className="font-bold">
						Selecciona una fecha:
					</label>
					<input
						type="date"
						id="fecha"
						{...register("fecha")}
						min="2000-01-01"
						className="border border-gray-400 p-2"
					/>

					<label htmlFor="localidad" className="font-bold">
						Localidades:
					</label>
					<select
						id="localidad"
						{...register("localidad")}
						className="border border-gray-400 p-2"
					>
						{localidadesOptions.map((option) => (
							<option key={option.value} value={option.value}>
								{option.label}
							</option>
						))}
					</select>

					<label htmlFor="precio" className="font-bold">
						Precios:
					</label>
					<select
						id="precio"
						{...register("precio")}
						className="border border-gray-400 p-2"
					>
						{preciosOptions.map((option) => (
							<option key={option.value} value={option.value}>
								{option.label}
							</option>
						))}
					</select>

					<label htmlFor="tipoCanal" className="font-bold">
						Tipo de Canal:
					</label>
					<select
						id="tipoCanal"
						{...register("tipoCanal")}
						className="border border-gray-400 p-2"
					>
						{tipoCanalOptions.map((option) => (
							<option key={option.value} value={option.value}>
								{option.label}
							</option>
						))}
					</select>

					<label htmlFor="precioDiario" className="font-bold">
						Precio Diario:
					</label>
					<select
						id="precioDiario"
						{...register("precioDiario")}
						className="border border-gray-400 p-2"
					>
						{preciosOptions.map((option) => (
							<option key={option.value} value={option.value}>
								{option.label}
							</option>
						))}
					</select>

					<label htmlFor="tipoCliente" className="font-bold">
						Tipo de Cliente:
					</label>
					<select
						id="tipoCliente"
						{...register("tipoCliente")}
						className="border border-gray-400 p-2"
					>
						{tipoClienteOptions.map((option) => (
							<option key={option.value} value={option.value}>
								{option.label}
							</option>
						))}
					</select>

					<label htmlFor="tiempo" className="font-bold">
						Tiempo:
					</label>
					<select
						id="tiempo"
						{...register("tiempo")}
						className="border border-gray-400 p-2"
					>
						<option value="1">1 meses</option>
						<option value="2">3 meses</option>
						<option value="3">6 días</option>
					</select>

					<button
						type="submit"
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					>
						Enviar
					</button>
				</div>
			</form>
		</div>
	);
}
