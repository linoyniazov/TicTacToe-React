import React from 'react';
import XImage from '../assets/x.png';
import OImage from '../assets/o.png';

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
	width: '100px',
	height: '100px',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: '#fff',
	border: '2px solid #000',
};

const imageStyle: React.CSSProperties = {
	width: '80%',
	height: '80%',
	objectFit: 'contain',
};

export default Square;