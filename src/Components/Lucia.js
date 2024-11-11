import React, { useEffect, useState } from "react";
import candleGirlImage from "/Users/julianordqvist/advent-calendar/src/Images/lucia.jpg"; // Ensure you have the correct path
import fallingObjectImage from "/Users/julianordqvist/advent-calendar/src/Images/raindrop.jpg"; // Ensure you have the correct path
import "/Users/julianordqvist/advent-calendar/src/Css/Lucia.css";

const Lucia = () => {
  const [characterPosition, setCharacterPosition] = useState(200);
  const [fallingObjects, setFallingObjects] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // Base speed of falling objects
  const baseFallingSpeed = 10; // Start speed at 10

  // Calculate falling speed based on score
  const fallingSpeed = baseFallingSpeed + Math.floor(score / 10) * 5;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft" && characterPosition > 0) {
        setCharacterPosition((prev) => prev - 20);
      } else if (e.key === "ArrowRight" && characterPosition < 380) {
        setCharacterPosition((prev) => prev + 20);
      }
    };

    const interval = setInterval(() => {
      if (!gameOver) {
        const newObjects = fallingObjects.map((obj) => ({
          ...obj,
          y: obj.y + fallingSpeed, // Use the falling speed based on the score
        }));

        const newFallingObjects = newObjects.filter((obj) => obj.y < 600);

        // Check for collisions
        newFallingObjects.forEach((obj) => {
          if (
            obj.y > 520 && // Adjust this value to the character's height
            obj.x < characterPosition + 50 && // Character width
            obj.x + 50 > characterPosition
          ) {
            setGameOver(true);
          }
        });

        // Increment score only if no collision occurred
        if (newFallingObjects.length !== newObjects.length) {
          setScore((prev) => prev + 1);
        }

        setFallingObjects(newFallingObjects);
      }
    }, 100);

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearInterval(interval);
      window.removeEventListener("keydown", handleKeyDown); // Cleanup event listener
    };
  }, [characterPosition, fallingObjects, gameOver, fallingSpeed]);

  useEffect(() => {
    const spawnObject = () => {
      const xPosition = Math.random() * 400;
      setFallingObjects((prev) => [...prev, { x: xPosition, y: 0 }]);
    };

    if (!gameOver) {
      const spawnInterval = setInterval(spawnObject, 2000);
      return () => clearInterval(spawnInterval);
    }
  }, [gameOver]);

  // Functions for mobile controls
  const moveLeft = () => {
    if (characterPosition > 0) {
      setCharacterPosition((prev) => prev - 20);
    }
  };

  const moveRight = () => {
    if (characterPosition < 380) {
      setCharacterPosition((prev) => prev + 20);
    }
  };

  // Function to reset the game
  const resetGame = () => {
    setCharacterPosition(200);
    setFallingObjects([]);
    setScore(0);
    setGameOver(false);
  };

  return (
    <div style={{ position: "relative", height: "600px", overflow: "hidden" }}>
      {gameOver ? (
        <>
          <h2 style={{ color: "red" }}>Game Over! Score: {score}</h2>
          <button
            onClick={resetGame}
            style={{ padding: "10px", fontSize: "16px" }}
          >
            Spela Igen
          </button>
        </>
      ) : (
        <>
          <h2>Poäng: {score}</h2>
          <img
            src={candleGirlImage}
            alt="Lucia"
            style={{
              position: "absolute",
              bottom: "0",
              left: `${characterPosition}px`,
              width: "50px",
              height: "100px",
            }}
          />
          {fallingObjects.map((obj, index) => (
            <img
              key={index}
              src={fallingObjectImage}
              alt="Falling Object"
              style={{
                position: "absolute",
                top: `${obj.y}px`,
                left: `${obj.x}px`,
                width: "50px",
                height: "50px",
              }}
            />
          ))}
          {/* Add buttons for mobile control */}
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: "10px",
            }}
          >
            <button onClick={moveLeft}>Vänster</button>
            <button onClick={moveRight}>Höger</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Lucia;
