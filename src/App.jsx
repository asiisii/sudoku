import React, { useEffect, useState } from 'react'
import { easyMode, easyAnswer } from './data'
import './App.css'

// export const easy_boards = [
// 	[2, -1, 5, -1, -1, -1, 7, -1, -1],
// 	[4, 5, -1, -1, -1, 9, -1, -1, -1],
// 	[-1, 2, -1, 6, -1, 8, 1, -1, -1],
// 	[-1, -1, 9, -1, -1, -1, 8, 5, 6],
// 	[7, -1, -1, -1, -1, -1, -1, -1, 2],
// 	[4, 1, 8, -1, -1, -1, 2, -1, -1],
// 	[-1, -1, 4, 3, -1, 7, -1, 1, -1],
// 	[-1, -1, -1, 1, -1, -1, -1, 8, 5],
// 	[-1, -1, 6, -1, -1, -1, 7, -1, 8],
// ]

const createDefaultValue = gameMode => {
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

	useEffect(() => setBoard(createDefaultValue(easyMode)), [])

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
												className='cell'
												onChange={e => handleChange(e, row, col)}
												value={board[row][col] === '-' ? '' : board[row][col]}
												disabled={
													createDefaultValue(easyMode)[row][col] !== '-'
												}
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

	const handleChange = (e, row, col) => {
		const val = e.target.value
		let newBoard = JSON.parse(JSON.stringify(board))
		if (val === '' || (val >= 1 && val <= 9)) {
			newBoard[row][col] = val
		}
		setBoard(newBoard)
	}

	return (
		<div className='container'>
			<div className='board-wrapper'>
				<h1 className='game-title'>Sudoku</h1>
				{board.length > 0 && createBoard()}
			</div>
		</div>
	)
}

export default App
