import React from 'react'

const Button = ({ label, handleClick }) => {
	// const handleClick = () => setStartNewGame(true)
	return <button onClick={() => handleClick()}>{label}</button>
}

export default Button
