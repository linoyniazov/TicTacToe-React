import React from 'react';
import Square from './Square';

interface BoardProps {
	board: (string|null)[];
	onClick: (index: number) => void;
}

const Board: React.FC<BoardProps> = ({ board, onClick }) => {
	return (
		<div style={boardStyle}>
			{board.map((value, index) => (
				<Square key={index} value={value} onClick={() => onClick(index)} />
			))}
		</div>
	);
};

const boardStyle: React.CSSProperties = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 120px)',
	gridGap: '10px',
	backgroundColor: '#1e293b',
	padding: '10px',
	borderRadius: '10px',
	boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  };

export default Board;