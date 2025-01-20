import React, { useState } from 'react';
import Board from './Board';
import ResetButton from './ResetButton';

const Game: React.FC = () => {
    const [board, setBoard] = useState<Array<string | null>>(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState<boolean>(true);
    const [winner, setWinner] = useState<string | null>(null);

    const handleClick = (index: number): void => {
        const newBoard = [...board];
        if (newBoard[index] || winner) return;
        newBoard[index] = isXNext ? 'X' : 'O';
        setBoard(newBoard);
        setIsXNext(!isXNext);
        const newWinner = calculateWinner(newBoard);
        if (newWinner) {
            setWinner(`Player ${newWinner} wins!`);
        } else if (!newBoard.includes(null)) {
            setWinner('It\'s a draw!');
        }
    };

    const resetGame = (): void => {
        setBoard(Array(9).fill(null));
        setIsXNext(true);
        setWinner(null);
    };

    return (
        <div>
            <h1>Tic Tac Toe</h1>
            <p>{winner ? winner : `Turn: ${isXNext ? 'X' : 'O'}`}</p>
            <Board board={board} onClick={handleClick} />
            <div style={{ marginTop: '20px' }}>
                <ResetButton onReset={resetGame} />
            </div>
        </div>
    );
};

const calculateWinner = (board: Array<string | null>): string | null => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    return null;
};

export default Game;