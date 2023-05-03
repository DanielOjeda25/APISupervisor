import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Select from "react-select";
import BackButton from "../BotomBack";
import SelectOptions from "../SelectOptions";
import Spinner from "../spinner";
import Submit from "../Submit";
import {
	getDownloadURL,
	getStorage,
	ref,
	uploadBytesResumable,
} from "firebase/storage";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebase/firebase.config";
import { optionsRubros } from "../../utils/gondolasUtils";

function Gondolas() {
	const app = initializeApp(firebaseConfig);
	const storage = getStorage(app);
	const [data, setData] = useState([]);
	const [rubrosSeleccionado, setRubrosSeleccionado] = useState("");
	const [clientesSeleccionado, setClientesSeleccionado] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [file, setFile] = useState(null);
	const [url, setUrl] = useState("");
	const [error, setError] = useState("");

	const handleChange = (event) => {
		setFile(event.target.files[0]);
	};
	const handleUpload = () => {
		if (file) {
			const storageRef = ref(storage, `images/${file.name}`);
			const uploadTask = uploadBytesResumable(storageRef, file);

			uploadTask.on(
				"state_changed",
				(snapshot) => {
					const progress =
						(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					alert(`Imagen Subiendose, espere un momento. ${progress}% `);
				},
				(error) => {
					setError(`Error al subir: ${error.message}`);
				},
				() => {
					getDownloadURL(uploadTask.snapshot.ref).then((getUrl) => {
						setUrl(getUrl);
						setFile(null);
					});
				},
			);
		} else {
			setError("Por favor selecciona una foto.");
		}
	};
	const {
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
			const response = await axios("http://10.211.55.6:8080/idClientes");
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
		formData.append("cliente", clientesSeleccionado.value);
		formData.append("imagen", url);
		try {
			await axios.post("http://10.211.55.6:8080/gondolas", formData, {
				headers: {
					"Content-Type": "application/json",
				},
			});
			alert("¡El formulario se ha enviado correctamente!");
		} catch (error) {
			console.error(error);
			alert("Ha ocurrido un error al enviar el formulario.");
		} finally {
			setUrl("");
			setClientesSeleccionado("");
			setRubrosSeleccionado("");
		}
	};
	const onSubmit = async () => await postGondolas();

	const handleRubrosChange = (event) => {
		setRubrosSeleccionado(event.target.value);
	};

	const handleClientesChange = (option) => {
		setClientesSeleccionado(option);
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
						className="max-w-md mx-auto border border-gray-200 p-6 rounded-lg bg-slate-100 my-2"
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
							<Select
								required
								id="clientes"
								name="clientes"
								options={data.map((cliente) => ({
									value: cliente.nombre,
									label: cliente.nombre,
								}))}
								value={clientesSeleccionado}
								onChange={handleClientesChange}
								classNamePrefix="react-select"
							/>

							{errors.clientes && (
								<span className="text-red-500">Campo requerido</span>
							)}
						</div>
						<div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
							<div className="w-full">
								<input
									type="file"
									className="border rounded p-1 w-full"
									onChange={handleChange}
								/>
							</div>
							<div className="w-full">
								<button
									className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-lg w-full md:w-auto"
									onClick={handleUpload}
									type='button'
								>
									Subir Foto
								</button>
							</div>
							{error && <div className="w-full text-center">{error}</div>}
							{errors.imagen && (
								<span className="text-red-500">Campo requerido</span>
							)}
							{url && (
								<div className="relative w-full md:w-auto">
									{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
									<p
										className="absolute top-1 right-2 bg-white rounded-full text-red-600 text-2xl cursor-pointer"
										onClick={() => setUrl(null)}
									>
										&#10007;
									</p>
									{url && (
										<img
											src={url}
											alt="Uploaded file"
											className="w-full h-40 
											 object-center rounded-lg"
										/>
									)}
								</div>
							)}
						</div>

						<Submit />
					</form>
				</>
			)}
			<div className=" my-6">
				<p className="text-center text-slate-50 font-thin mb-2">
					Antes de apretar el boton <strong className="underline">Enviar Datos</strong> <br />asegurese de <strong className="underline">Subir la foto!</strong>
				</p>
			</div>
		</div>
	);
}

export default Gondolas;
