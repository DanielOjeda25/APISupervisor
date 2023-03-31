import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
	vendedorOptions,
	localidadesOptions,
	tipoCanalOptions,
	tipoClienteOptions,
	tiempoOptions,
} from "../../utils/ComercialUtils";
import BackButton from "../BotomBack";
import Selector from "../Selector";

export default function Comercial() {
	const { register, handleSubmit } = useForm();
	const [fechaDesdeSeleccionada, setFechaDesdeSeleccionada] = useState("");
	const [fechaHastaSeleccionada, setFechaHastaSeleccionada] = useState("");
	const [localidadSeleccionada, setLocalidadSeleccionada] = useState("");
	const [tipoCanalSeleccionado, setTipoCanalSeleccionado] = useState("");
	const [vendedor, setVendedor] = useState("");
	const [tipoClienteSeleccionado, setTipoClienteSeleccionado] = useState("");
	const [tiempoSeleccionado, setTiempoSeleccionado] = useState("");
	const [tablaDatos, setTablaDatos] = useState(null);

	const onSubmit = () => {
		// Generar los datos de la tabla
		const datos = [
			{
				fechaDesde: fechaDesdeSeleccionada,
				fechaHasta: fechaHastaSeleccionada,
				localidad: localidadSeleccionada,
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
					<label htmlFor="fecha-desde" className="font-bold">
						Fecha desde:
					</label>
					<input
						required
						type="date"
						id="fecha-desde"
						{...register("fecha-desde")}
						min="2000-01-01"
						className="border border-gray-400 p-2"
						onChange={(e) => setFechaDesdeSeleccionada(e.target.value)}
					/>

					<label htmlFor="fecha-hasta" className="font-bold">
						Fecha hasta:
					</label>
					<input
						required
						type="date"
						id="fecha-hasta"
						{...register("fecha-hasta")}
						min="2012-01-01"
						className="border border-gray-400 p-2"
						onChange={(e) => setFechaHastaSeleccionada(e.target.value)}
					/>

					<Selector
						label={"Localidad: "}
						options={localidadesOptions}
						value={{
							value: localidadSeleccionada,
							label: localidadSeleccionada,
						}}
						onChange={(option) => setLocalidadSeleccionada(option.value)}
					/>
					<Selector
						label={"Tipo de Canal: "}
						options={tipoCanalOptions}
						value={{
							value: tipoCanalSeleccionado,
							label: tipoCanalSeleccionado,
						}}
						onChange={(option) => setTipoCanalSeleccionado(option.value)}
					/>

					<Selector
						label={"Vendedor: "}
						options={vendedorOptions}
						value={{
							value: vendedor,
							label: vendedor,
						}}
						onChange={(option) => setVendedor(option.value)}
					/>

					<Selector
						label={"Tipo de Cliente: "}
						options={tipoClienteOptions}
						value={{
							value: tipoClienteSeleccionado,
							label: tipoClienteSeleccionado,
						}}
						onChange={(option) => setTipoClienteSeleccionado(option.value)}
					/>
					<Selector
						label={"Tiempo: "}
						options={tiempoOptions}
						value={{
							value: tiempoSeleccionado,
							label: tiempoSeleccionado,
						}}
						onChange={(option) => setTiempoSeleccionado(option.value)}
					/>
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
										<th className="px-4 py-2">Localidad</th>
										<th className="px-4 py-2">Tipo de Canal</th>
										<th className="px-4 py-2">Vendedor</th>
										<th className="px-4 py-2">Tipo de Cliente</th>
									</tr>
								</thead>
								<tbody>
									{tablaDatos.map((datos, index) => (
										// rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
										<tr key={index}>
											<td className="px-4 py-2">{datos.localidad}</td>
											<td className="px-4 py-2">{datos.tipoCanal}</td>
											<td className="px-4 py-2">{datos.vendedor}</td>
											<td className="px-4 py-2">{datos.tipoCliente}</td>
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
