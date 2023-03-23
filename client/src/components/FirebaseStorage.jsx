import { useState } from "react";
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

const FirebaseStorage = () => {
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
