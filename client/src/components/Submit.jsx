import React from "react";

const Submit = () => {
	return (
		<div>
			<button
				type="submit"
				className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
			>
				<svg
					className="w-4 h-4 mr-2 text-white inline-block align-text-bottom"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
				>
					<path fill="currentColor" d="M10 0l8 8h-6v12h-4v-12h-6l8-8z" />
				</svg>
				Enviar Datos.
			</button>
		</div>
	);
};

export default Submit;
