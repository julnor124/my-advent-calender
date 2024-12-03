import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Css/TicTacToe.css"; // Make sure to add your CSS file for the game.

const TicTacToe = () => {
  const navigate = useNavigate();

  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const calculateWinner = (board) => {
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

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = board.slice();
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);

    const gameWinner = calculateWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
    } else if (!newBoard.includes(null)) {
      setWinner("Draw");
    }
  };

  useEffect(() => {
    if (!isXNext && !winner) {
      const emptyCells = board
        .map((cell, index) => (cell === null ? index : null))
        .filter((cell) => cell !== null);

      if (emptyCells.length > 0) {
        setTimeout(() => {
          const randomIndex =
            emptyCells[Math.floor(Math.random() * emptyCells.length)];
          const newBoard = board.slice();
          newBoard[randomIndex] = "O"; // AI always plays 'O'
          setBoard(newBoard);

          const gameWinner = calculateWinner(newBoard);
          if (gameWinner) {
            setWinner(gameWinner);
          } else if (!newBoard.includes(null)) {
            setWinner("Draw");
          }

          setIsXNext(true); // Player's turn after AI
        }, 1000); // 1000ms delay for AI's move
      }
    }
  }, [isXNext, board, winner]);

  const handlePlayAgain = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setIsXNext(true);
  };

  return (
    <div className="tic-tac-toe">
      <h1>TRE I RAD! Kan ni vinna mot AI datorn?</h1>
      <div className="board">
        {board.map((cell, index) => (
          <div
            key={index}
            className={`cell ${cell}`} // This will set background-image based on cell's value
            onClick={() => handleClick(index)}
          >
            {/* Do not display "X" or "O" if background image is set */}
          </div>
        ))}
      </div>

      {winner && (
        <div className="winner">
          {winner === "Draw"
            ? "Oavgjort, testa igen!"
            : winner === "X"
            ? "GRATTIS!!! Ni vann och lyckades öppna den hemliga knappen. Tryck på den för att få den sista utmaningen!"
            : winner === "O"
            ? "Du förlorade! Försök igen och visa vad du går för!"
            : null}
        </div>
      )}

      {winner ? (
        <div>
          {winner === "X" && (
            <button
              onClick={() => navigate("/oneb")}
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                backgroundColor: "#28a745",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              HEMLIGA KNAPPEN
            </button>
          )}
          <button
            onClick={handlePlayAgain}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Spela Igen
          </button>
        </div>
      ) : (
        <button
          onClick={handlePlayAgain}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Spela igen
        </button>
      )}
    </div>
  );
};

export default TicTacToe;
