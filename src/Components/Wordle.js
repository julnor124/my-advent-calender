import React, { useState } from "react";
import "/Users/julianordqvist/advent-calendar/src/Css/Wordle.css"; // Ensure correct path for styles

const Wordle = () => {
  const [guess, setGuess] = useState("");
  const [attempts, setAttempts] = useState([]);
  const correctWord = "TOMTE"; // Set your Wordle word here
  const [password, setPassword] = useState(""); // State to hold the password input
  const [isUnlocked, setIsUnlocked] = useState(false); // State to check if the password is correct

  const correctPassword = "tomtenisse"; // Replace with your desired password

  const handleInputChange = (e) => {
    setGuess(e.target.value.toUpperCase()); // Convert input to uppercase
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (guess.length === 5) {
      setAttempts([...attempts, guess]);
      setGuess("");
    }
  };

  // Handle unlocking Wordle game
  const handleUnlock = () => {
    if (password === correctPassword) {
      setIsUnlocked(true); // Unlock the game
    } else {
      alert("Incorrect password. Please try again."); // Alert for incorrect password
    }
  };

  return (
    <div className="wordle-container">
      {!isUnlocked ? ( // Show password prompt if not unlocked
        <>
          <h2>Lucka 4</h2>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
          />
          <button onClick={handleUnlock}>Öppna lucka</button>
        </>
      ) : (
        <>
          <h2>Dagens lucka är en ORDEL! Du har 5 försök på dig</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={guess}
              onChange={handleInputChange}
              maxLength={5}
              placeholder="Enter 5-letter word"
            />
            <button type="submit">Submit</button>
          </form>

          <div className="attempts">
            {attempts.map((attempt, index) => (
              <div key={index} className="attempt">
                {attempt.split("").map((letter, idx) => (
                  <span
                    key={idx}
                    className={
                      correctWord[idx] === letter
                        ? "correct"
                        : correctWord.includes(letter)
                        ? "almost"
                        : "wrong"
                    }
                  >
                    {letter}
                  </span>
                ))}
              </div>
            ))}
          </div>
          {attempts.length >= 5 && !attempts.includes(correctWord) && (
            <div className="reveal">
              <p>
                The correct word was: <strong>{correctWord}</strong>
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Wordle;
