import React from 'react'
import Button from '../Button'
import './modal.css'

const Modal = ({ handleBtnClick }) => {
	return (
		<div className='modal-wrapper'>
			<div className='modal-content'>
				<div className='modal-header'>
					{/* <span className='close'>&times;</span> */}
					<h1>Game Over</h1>
				</div>
				<div className='modal-body'>
					<h3>You have made 3 mistakes and lost this game</h3>
				</div>
				<div className='modal-footer'>
					<Button label='New Game' handleClick={handleBtnClick} />
				</div>
			</div>
		</div>
	)
}

export default Modal
