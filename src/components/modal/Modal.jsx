import React from 'react'
import Button from '../Button'
import './modal.css'

const Modal = ({ handleBtnClick , message, title}) => {
	return (
		<div className='modal-wrapper'>
			<div className='modal-content'>
				<div className='modal-header'>
					{/* <span className='close'>&times;</span> */}
					<h1>{title}</h1>
				</div>
				<div className='modal-body'>
					<h3>{message}</h3>
				</div>
				<div className='modal-footer'>
					<Button label='New Game' handleClick={handleBtnClick} />
				</div>
			</div>
		</div>
	)
}

export default Modal
