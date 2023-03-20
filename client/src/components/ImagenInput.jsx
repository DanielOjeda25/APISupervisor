import React from "react";

function ImagenInput({ handleImagenChange }) {
	return (
		<div className="mb-4">
			<label className="block mb-2 font-bold" htmlFor="imagen">
				Imagen:
			</label>
			<input
				onChange={handleImagenChange}
				className="block w-full mb-5 text-xs text-gray-900  rounded cursor-pointer bg-gray-50 focus:outline-none"
				id="imagen"
				type="file"
			/>
		</div>
	);
}

export default ImagenInput;
