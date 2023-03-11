import { Formik, Form } from "formik";
import BackButton from "./BotomBack";

const opciones = [
	{ name: "lista1", label: "Lista 1" },
	{ name: "lista2", label: "Lista 2" },
	{ name: "lista3", label: "Lista 3" },
	{ name: "lista4", label: "Lista 4" },
	{ name: "lista5", label: "Lista 5" },
];

const Comercial = () => {
	return (
		<>
			<Formik
				initialValues={{
					lista1: "",
					lista2: "",
					lista3: "",
					lista4: "",
					lista5: "",
				}}
				onSubmit={(values) => {
					console.log(values);
				}}
			>
				{({ values, handleChange }) => (
					<div className="w-full max-w-md mx-auto h-screen items-center justify-center">
						<BackButton />
						<Form className=" shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-white">
							{opciones.map(({ name, label }) => (
								<div key={name} className="my-4">
									<label
										htmlFor={name}
										className="block text-gray-700 font-bold mb-2"
									>
										{label}:
									</label>
									<select
										id={name}
										name={name}
										value={values[name]}
										onChange={handleChange}
										className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
									>
										<option value="">Seleccione una opción</option>
										<option value="opcion1">Opción 1</option>
										<option value="opcion2">Opción 2</option>
										<option value="opcion3">Opción 3</option>
									</select>
								</div>
							))}
							<button
								type="submit"
								className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							>
								Enviar
							</button>
						</Form>

						{values.lista1 &&
							values.lista2 &&
							values.lista3 &&
							values.lista4 &&
							values.lista5 && (
								<div className="flex flex-col">
									<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
										<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
											<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
												<table className="min-w-full divide-y divide-gray-200">
													<tbody className="bg-white divide-y divide-gray-200">
														<tr>
															<td className="px-6 py-4 whitespace-nowrap font-medium text-gray-700">
																Lista 1
															</td>
															<td className="px-6 py-4 whitespace-nowrap text-gray-500">
																{values.lista1}
															</td>
														</tr>
														<tr>
															<td className="px-6 py-4 whitespace-nowrap font-medium text-gray-700">
																Lista 2
															</td>
															<td className="px-6 py-4 whitespace-nowrap text-gray-500">
																{values.lista2}
															</td>
														</tr>
														<tr>
															<td className="px-6 py-4 whitespace-nowrap font-medium text-gray-700">
																Lista 3
															</td>
															<td className="px-6 py-4 whitespace-nowrap text-gray-500">
																{values.lista3}
															</td>
														</tr>
														<tr>
															<td className="px-6 py-4 whitespace-nowrap font-medium text-gray-700">
																Lista 4
															</td>
															<td className="px-6 py-4 whitespace-nowrap text-gray-500">
																{values.lista4}
															</td>
														</tr>
														<tr>
															<td className="px-6 py-4 whitespace-nowrap font-medium text-gray-700">
																Lista 5
															</td>
															<td className="px-6 py-4 whitespace-nowrap text-gray-500">
																{values.lista5}
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									</div>
								</div>
							)}
					</div>
				)}
			</Formik>
		</>
	);
};

export default Comercial;
