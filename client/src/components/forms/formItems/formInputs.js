// dependencies
import React from 'react';

export const TextInput = ({
	type,
	name,
	value,
	onChange,
	className,
	placeholder
}) => {
	return (
		<input
			type={type}
			name={name}
			value={value}
			onChange={onChange}
			className={className}
			placeholder={placeholder}
		/>
	);
};

export const SelectInput = ({ name, id, className, options }) => {
	return (
		<select name={name} id={id} className={className}>
			{options.map((item, index) => {
				return (
					<option key={index} value={item.value}>
						{item.label}
					</option>
				);
			})}
		</select>
	);
};

export const Label = ({ htmlFor, className, text }) => {
	return (
		<label htmlFor={htmlFor} className={className}>
			{text}
		</label>
	);
};
