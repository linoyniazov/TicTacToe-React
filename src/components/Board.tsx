import React from 'react';
import Square from './Square';

interface BoardProps {
	board: string[];
	handleClick: (index: number) => void;
}

const Board: React.FC<BoardProps> = ({ board, handleClick }) => {
	return (
		<div style={boardStyle}>
			{board.map((value, index) => (
				<Square key={index} value={value} onClick={() => handleClick(index)} />
			))}
		</div>
	);
};

const boardStyle: React.CSSProperties = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 100px)',
	gridGap: '5px',
	backgroundColor: 'black',
};

export default Board;