import React, { useEffect, useState } from 'react'
import { easyMode, easyModeAnswer } from './data'
import './App.css'

const boardSetUp = gameMode => {
	const defaultValues = [1, 2, 3, 4, 5, 6, 7, 8, 9].reduce(
		(arr, currEl, currIndex) => {
			const a = arr.push(
				gameMode[0].split('').slice(currIndex * 9, (currIndex + 1) * 9)
			)
			return arr
		},
		[]
	)
	return defaultValues
}

const App = () => {
	const [board, setBoard] = useState([])
	const [solution, setSolution] = useState([])
	const [mistakes, setMistakes] = useState(0)

	useEffect(() => {
		setBoard(boardSetUp(easyMode))
		setSolution(boardSetUp(easyModeAnswer))
	}, [])

	const createBoard = () => {
		return (
			<table>
				<tbody>
					{[0, 1, 2, 3, 4, 5, 6, 7, 8].map((row, rIndex) => {
						return (
							<tr key={rIndex}>
								{[0, 1, 2, 3, 4, 5, 6, 7, 8].map((col, cIndex) => {
									return (
										<td key={rIndex + cIndex}>
											<input
												className={`cell 
                        ${(row === 2 || row === 5) && 'upper-horizontal-line'} 
                        ${(row === 3 || row === 6) && 'lower-horizontal-line'}
                        ${(col === 2 || col === 5) && 'left-vertical-line'} 
                        ${(col === 3 || col === 6) && 'right-vertical-line'}
                        ${boardSetUp(easyMode)[row][col] !== '-' && 'disabled'}
                        `}
												onChange={e => handleChange(e, row, col)}
												value={board[row][col] === '-' ? '' : board[row][col]}
												disabled={boardSetUp(easyMode)[row][col] !== '-'}
											/>
										</td>
									)
								})}
							</tr>
						)
					})}
				</tbody>
			</table>
		)
	}

	const isGameOver = () => document.querySelectorAll('input').forEach(el => (el.disabled = true))

	const handleChange = (e, row, col) => {
		const val = e.target.value
		let newBoard = JSON.parse(JSON.stringify(board))
		if (val === '' || (val >= 1 && val <= 9)) {
			newBoard[row][col] = val
			if (
				newBoard[row][col] !== '' &&
				newBoard[row][col] !== solution[row][col]
			) {
				e.target.classList.add('incorrect')
				setMistakes(mistakes + 1)
				if (mistakes === 2) isGameOver()
			} else {
				e.target.classList.remove('incorrect')
			}
		}

		setBoard(newBoard)
	}

	return (
		<div className='container'>
			<h1 className='game-title'>Sudoku</h1>
			<div className='board-wrapper'>
				<div className='board'>{board.length > 0 && createBoard()}</div>
				<div className='game-info'>
					<h3 className='error-count'>Mistakes: {mistakes}/3</h3>
				</div>
			</div>
		</div>
	)
}

export default App
