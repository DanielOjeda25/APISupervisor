import React from "react";
import BackButton from "../BotomBack";

const Actualizacion = () => {
	return (
		<div className="items-center justify-center h-screen  mt-10">
			<BackButton />
			<table className="min-w-full divide-y divide-gray-200">
				<tbody className="bg-white divide-y divide-gray-200">
					<tr>
						<td className="px-6 py-4 whitespace-nowrap font-medium text-gray-700">
							Nombre
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-gray-500">
							John Doe
						</td>
					</tr>
					<tr>
						<td className="px-6 py-4 whitespace-nowrap font-medium text-gray-700">
							Edad
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-gray-500">30</td>
					</tr>
					<tr>
						<td className="px-6 py-4 whitespace-nowrap font-medium text-gray-700">
							Profesión
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-gray-500">
							Desarrollador
						</td>
					</tr>
					<tr>
						<td className="px-6 py-4 whitespace-nowrap font-medium text-gray-700">
							Correo electrónico
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-gray-500">
							john.doe@example.com
						</td>
					</tr>
					<tr>
						<td className="px-6 py-4 whitespace-nowrap font-medium text-gray-700">
							Teléfono
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-gray-500">
							+1 555-123-4567
						</td>
					</tr>
					<tr>
						<td className="px-6 py-4 whitespace-nowrap font-medium text-gray-700">
							País
						</td>
						<td className="px-6 py-4 whitespace-nowrap text-gray-500">
							Estados Unidos
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Actualizacion;
