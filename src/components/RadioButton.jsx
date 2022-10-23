import React from 'react'

const RadioButton = ({type, value, id, radioHandler, name, checked, label}) => {
	return (
		<>
			<input
				type={type}
				value={value}
				id={id}
				onChange={radioHandler}
				name={name}
				checked={checked}
			/>
			<label htmlFor={name}>{label}</label>
		</>
	)
}

export default RadioButton
