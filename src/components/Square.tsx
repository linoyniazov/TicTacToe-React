import React from 'react';
import XImage from '../assets/x.png';
import OImage from '../assets/o.png';
import './Square.css';


interface SquareProps {
	value: string | null;
	onClick: () => void;
}

const Square: React.FC<SquareProps> = ({ value, onClick }) => {
	const renderContent = () => {
		if (value === 'X') {
			return <img src={XImage} alt="X" style={imageStyle} />;
		} else if (value === 'O') {
			return <img src={OImage} alt="O" style={imageStyle} />;
		}
		return null;
	};

	return (
		<button style={squareStyle} onClick={onClick}>
			{renderContent()}
		</button>
	);
};

const squareStyle: React.CSSProperties = {
	width: '120px',
	height: '120px',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: '#e2e8f0',
	border: '3px solid #334155',
	borderRadius: '5px',
	cursor: 'pointer',
	transition: 'background-color 0.3s ease',
};

const imageStyle: React.CSSProperties = {
	width: '70%',
	height: '70%',
	objectFit: 'contain',
};


export default Square;