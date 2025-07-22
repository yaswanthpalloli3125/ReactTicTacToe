import { useState } from "react";

const initialState = () => Array(9).fill(null);

const useTicTacToe = () => {
  const [board, setBoard] = useState(initialState());
  const [isXnext, setIsXnext] = useState(true);
  const Winning_Patterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const calculatewinner = (currentboard) => {
    for (let i = 0; i < Winning_Patterns.length; i++) {
      const [a, b, c] = Winning_Patterns[i];
      if (
        currentboard[a] &&
        currentboard[a] == currentboard[b] &&
        currentboard[a] == currentboard[c]
      ) {
        return currentboard[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    const winner = calculatewinner(board);

    if (winner || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = isXnext ? "X" : "O";
    setBoard(newBoard);
    setIsXnext(!isXnext);
  };

  const getStatusMessage = () => {
    const winner = calculatewinner(board);
    if(winner) return `player ${winner} wins!`;
    if(!board.includes(null)) return 'its a draw';
    return `Player ${isXnext ? 'X' : 'O'} turn`;
  };
  const resetGame = () => {
    setBoard(board.fill(null));
    setIsXnext(true);
  };

  return { board, handleClick, calculatewinner, getStatusMessage, resetGame };
};
export default useTicTacToe;
