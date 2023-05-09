import { useState } from "react";
import { initializeApp } from "firebase/app";
import {
	getStorage,
	ref,
	uploadBytesResumable,
	getDownloadURL,
} from "firebase/storage";
import { firebaseConfig } from "../firebase/firebase.config";

// Inicializa la aplicación de Firebase
const app = initializeApp(firebaseConfig);

// Obtiene una referencia al servicio de almacenamiento de Firebase
const storage = getStorage(app);

const FirebaseStorage = () => {
	// Define los estados iniciales para el archivo, la URL y los errores
	const [file, setFile] = useState(null);
	const [url, setUrl] = useState("");
	const [error, setError] = useState("");

	// Maneja el cambio del input de tipo "file"
	const handleChange = (event) => {
		setFile(event.target.files[0]);
	};

	// Maneja la subida del archivo
	const handleUpload = () => {
		if (file) {
			// Crea una referencia al archivo en el almacenamiento de Firebase
			const storageRef = ref(storage, `images/${file.name}`);

			// Sube el archivo al almacenamiento de Firebase
			const uploadTask = uploadBytesResumable(storageRef, file);

			// Maneja los cambios en el estado de la subida del archivo
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
					// Obtiene la URL de descarga del archivo subido
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

	// Renderiza el componente
	return (
		<div>
			<h2>{url}</h2>
			<input type="file" onChange={handleChange} />
			<button onClick={handleUpload}>Upload</button>
			{error && <div>{error}</div>}
			{url && <img src={url} alt="Uploaded file" />}
		</div>
	);
};

export default FirebaseStorage;

//Y no te preocupes creo que este componente no es llamado , se uso en las primeras instancias del proyecto
//luego se dejo de lado.