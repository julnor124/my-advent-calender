import React, { useState, useEffect, useRef } from "react";
import "/Users/julianordqvist/advent-calendar/src/Css/Reindeer.css";
import reindeerImage from "/Users/julianordqvist/advent-calendar/src/Images/rudolf.jpg";

function Reindeer() {
  const [reindeerPosition, setReindeerPosition] = useState(50); // Start in the middle
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [obstaclePosition, setObstaclePosition] = useState(100); // Obstacle start off screen
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false); // Track if game has been won

  const gameAreaRef = useRef(null);
  const floorHeight = 10; // Height of the floor in percentage
  const obstacleWidth = 10; // Width of the obstacle in percentage
  const reindeerWidth = 10; // Width of the reindeer (for collision detection)

  // Gravity and Reindeer Flap
  useEffect(() => {
    let gravity;
    if (gameStarted && !gameOver) {
      gravity = setInterval(() => {
        setReindeerPosition((pos) => {
          const newPosition = pos + 3; // Gravity pulls down
          const maxPosition = 100 - floorHeight; // Floor collision point
          return newPosition >= maxPosition ? maxPosition : newPosition;
        });
      }, 30);
    }
    return () => clearInterval(gravity);
  }, [gameStarted, gameOver]);

  // Obstacles Movement
  useEffect(() => {
    let obstacleMovement;
    if (gameStarted && !gameOver) {
      obstacleMovement = setInterval(() => {
        setObstaclePosition((pos) => {
          if (pos <= 0) {
            setScore((score) => score + 1); // Increase score when obstacle goes off-screen
            return 100; // Reset obstacle position
          }
          return pos - 2; // Obstacle speed
        });
      }, 30);
    }
    return () => clearInterval(obstacleMovement);
  }, [gameStarted, gameOver]);

  // Collision Detection
  useEffect(() => {
    const reindeerBottom = reindeerPosition + reindeerWidth;
    const obstacleLeft = obstaclePosition;
    const obstacleRight = obstacleLeft + obstacleWidth;

    if (
      obstacleLeft < reindeerWidth && // Obstacle near the reindeer
      obstacleRight > 0 &&
      reindeerBottom >= 100 - floorHeight // Reindeer hits the ground or obstacle
    ) {
      setGameOver(true); // Collision detected
      setGameStarted(false);
    }
  }, [reindeerPosition, obstaclePosition]);

  // Winning Condition
  useEffect(() => {
    if (score >= 10) {
      setGameStarted(false);
      setGameOver(true);
      setGameWon(true); // Track game win state
    }
  }, [score]);

  // Start or Restart Game
  const startGame = () => {
    if (!gameWon) {
      // Prevent restart if the game has been won
      setGameStarted(true);
      setGameOver(false);
      setScore(0);
      setReindeerPosition(50);
      setObstaclePosition(100);
    }
  };

  // Reindeer "Flap" on Click/Touch
  const flap = () => {
    if (!gameStarted && !gameWon) startGame(); // Start only if game not won
    else if (!gameOver && gameStarted) {
      setReindeerPosition((pos) => (pos - 40 < 0 ? 0 : pos - 40)); // Jump, prevent going above screen
    }
  };

  return (
    <div
      className="game-container"
      ref={gameAreaRef}
      onClick={flap} // For desktop click
      onTouchStart={flap} // For mobile touch
    >
      <div className="score">Score: {score}</div>
      {gameOver && gameWon && (
        <div className="win-message">
          GRATTIS DU KLARADE SPELET! GOD FAAAKKING JUL och tack för att ni
          deltagit i denna julkalender. PS, kolla under er säng för en liten
          överraskning 🎉
        </div>
      )}
      {gameOver && !gameWon && (
        <div className="game-over">Game Over, tryck för att köra igen</div>
      )}

      {/* Reindeer with Image */}
      <img
        src={reindeerImage}
        alt="Reindeer"
        className="reindeer"
        style={{
          top: `${reindeerPosition}%`,
          width: "10%",
          position: "absolute",
        }}
      />

      <div className="obstacle" style={{ left: `${obstaclePosition}%` }}></div>

      <div className="floor"></div>

      {!gameStarted && !gameOver && !gameWon && (
        <div className="start-message">Klicka för att börja</div>
      )}
    </div>
  );
}

export default Reindeer;
