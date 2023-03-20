import React from "react";

const SelectOptions = ({ label, options, value, onChange, error }) => {
	return (
		<div className="mb-4">
			<label htmlFor={label} className="block mb-2 font-bold">
				{label}
			</label>
			<select
				required={true}
				id={label}
				value={value}
				onChange={onChange}
				className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
			>
				<option value="">Seleccione una opción</option>
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
			{/* {error && (
				<span className="text-red-500 ml-2 text-xs">Campo requerido</span>
			)} */}
		</div>
	);
};

export default SelectOptions;
