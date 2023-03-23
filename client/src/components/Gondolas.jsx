import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { optionsRubros } from "../utils/gondolasUtils";
import BackButton from "./BotomBack";
import axios from "axios";
import Spinner from "./spinner";
import ImagenInput from "./ImagenInput";
import Submit from "./Submit";
import SelectOptions from "./SelectOptions";
import Select from "react-select";
import { initializeApp } from "firebase/app";
import {
	getStorage,
	ref,
	uploadBytesResumable,
	getDownloadURL,
} from "firebase/storage";
import { firebaseConfig } from "../firebase/firebase.config";
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
function Gondolas() {
	const [data, setData] = useState([]);
	const [rubrosSeleccionado, setRubrosSeleccionado] = useState("");
	const [clientesSeleccionado, setClientesSeleccionado] = useState("");
	const [imagenSeleccionada, setImagenSeleccionada] = useState(null);
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
					console.log(`Upload is ${progress}% done`);
				},
				(error) => {
					setError(`Upload error: ${error.message}`);
				},
				() => {
					getDownloadURL(uploadTask.snapshot.ref).then((getUrl) => {
						setUrl(getUrl);
						setFile(null);
						console.log(getUrl);
					});
				},
			);
		} else {
			setError("Please select a file to upload.");
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
		formData.append("nombre", clientesSeleccionado.value);
		formData.append("imagen", url);
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
			setUrl('')
			setClientesSeleccionado("");
			setRubrosSeleccionado("");
		}
	};
	const onSubmit = async () => {
		const data = {
			rubro: rubrosSeleccionado,
			cliente: clientesSeleccionado,
			imagen: url,
		};

		console.log(data);
		await postGondolas();
	};

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
						<div className="mb-4">
							<input type="file" onChange={handleChange} />
							<button onClick={handleUpload} type='button'>
								Subir Foto
							</button>
							{error && <div>{error}</div>}
							{errors.imagen && (
								<span className="text-red-500">Campo requerido</span>
							)}
							{url && (
								<>
									<div className="relative">
										{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
										<p
											className="absolute top-1 right-2 bg-white rounded-full text-red-600 text-2xl "
											onClick={() => setUrl(null)}
										>
											&#10007;
										</p>
										{url && <img src={url} alt="Uploaded file" />}
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
