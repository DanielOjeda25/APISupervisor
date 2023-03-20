import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
	vendedorOptions,
	localidadesOptions,
	preciosOptions,
	tipoCanalOptions,
	tipoClienteOptions,
} from "../utils/ComercialUtils";
import BackButton from "./BotomBack";

export default function Comercial() {
	const { register, handleSubmit } = useForm();
	const [fechaSeleccionada, setFechaSeleccionada] = useState("");
	const [localidadSeleccionada, setLocalidadSeleccionada] = useState("");
	const [listaPrecio, setListaPrecio] = useState("");
	const [tipoCanalSeleccionado, setTipoCanalSeleccionado] = useState("");
	const [vendedor, setVendedor] = useState("");
	const [tipoClienteSeleccionado, setTipoClienteSeleccionado] = useState("");
	const [tiempoSeleccionado, setTiempoSeleccionado] = useState("");
	const [tablaDatos, setTablaDatos] = useState(null);

	const onSubmit = () => {
		// Generar los datos de la tabla
		const datos = [
			{
				fecha: fechaSeleccionada,
				localidad: localidadSeleccionada,
				listaPrecio: listaPrecio,
				tipoCanal: tipoCanalSeleccionado,
				vendedor: vendedor,
				tipoCliente: tipoClienteSeleccionado,
				tiempo: tiempoSeleccionado,
			},
		];
		console.table(datos);
		// Actualizar el estado con los datos de la tabla
		setTablaDatos(datos);
	};

	return (
		<div className="max-w-sm mx-auto p-10 rounded-lg shadow-md">
			<BackButton />
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
						onChange={(e) => setFechaSeleccionada(e.target.value)}
					/>

					<label htmlFor="localidad" className="font-bold">
						Localidades:
					</label>
					<select
						id="localidad"
						{...register("localidad")}
						className="border border-gray-400 p-2"
						onChange={(e) => setLocalidadSeleccionada(e.target.value)}
					>
						{localidadesOptions.map((option) => (
							<option key={option.value} value={option.value}>
								{option.label}
							</option>
						))}
					</select>

					<label htmlFor="precio" className="font-bold">
						Lista Precios:
					</label>
					<select
						id="precio"
						{...register("precio")}
						className="border border-gray-400 p-2"
						onChange={(e) => setListaPrecio(e.target.value)}
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
						onChange={(e) => setTipoCanalSeleccionado(e.target.value)}
					>
						{tipoCanalOptions.map((option) => (
							<option key={option.value} value={option.value}>
								{option.label}
							</option>
						))}
					</select>

					<label htmlFor="vendedor" className="font-bold">
						Vendedor:
					</label>
					<select
						id="vendedor"
						{...register("vendedor")}
						className="border border-gray-400 p-2"
						onChange={(e) => setVendedor(e.target.value)}
					>
						{vendedorOptions.map((option) => (
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
						onChange={(e) => setTipoClienteSeleccionado(e.target.value)}
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
						onChange={(e) => setTiempoSeleccionado(e.target.value)}
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
					{tablaDatos && (
						<div className="overflow-x-auto w-full">
							<table className="table-auto divide-y w-full text-center bg-gray-100 rounded-lg">
								<thead>
									<tr>
										<th className="px-4 py-2">Fecha</th>
										<th className="px-4 py-2">Localidad</th>
										<th className="px-4 py-2">Lista de Precio</th>
										<th className="px-4 py-2">Tipo de Canal</th>
										<th className="px-4 py-2">Precio Diario</th>
										<th className="px-4 py-2">Tipo de Cliente</th>
										<th className="px-4 py-2">Tiempo</th>
									</tr>
								</thead>
								<tbody>
									{tablaDatos.map((datos, index) => (
										<tr key={index}>
											<td className="px-4 py-2">{datos.fecha}</td>
											<td className="px-4 py-2">{datos.localidad}</td>
											<td className="px-4 py-2">{datos.listaPrecio}</td>
											<td className="px-4 py-2">{datos.tipoCanal}</td>
											<td className="px-4 py-2">{datos.precioDiario}</td>
											<td className="px-4 py-2">{datos.tipoCliente}</td>
											<td className="px-4 py-2">{datos.tiempo}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					)}
				</div>
			</form>
		</div>
	);
}
