import React, { useState } from "react";
import "/Users/julianordqvist/advent-calendar/src/Css/Broccoli.css"; // Ensure correct path for styles
import Argentina from "/Users/julianordqvist/advent-calendar/src/Images/argentina.jpg";

const Country = () => {
  const [guess, setGuess] = useState("");
  const [attempts, setAttempts] = useState([]);
  const [feedback, setFeedback] = useState("");
  const correctWord = "Argentina";
  const maxAttempts = 8;
  const [password, setPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleInputChange = (e) => {
    setGuess(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      attempts.length < maxAttempts &&
      guess.trim().length > 0 &&
      !isCorrect
    ) {
      const attemptsLeft = maxAttempts - attempts.length - 1;

      if (guess.toLowerCase() === correctWord.toLowerCase()) {
        setFeedback(
          "Nån har gjort sin geografiläxa, givetvis var det ARGENTINA"
        );
        setIsCorrect(true);
      } else {
        setFeedback(
          attemptsLeft > 0
            ? `Fel land. Du har ${attemptsLeft} gissningar kvar.`
            : `Nu var det kört... Rätt svar var: '${correctWord}'.`
        );
      }

      setAttempts([...attempts, guess]);
      setGuess("");
    }
  };

  const handleUnlock = () => {
    if (password === "julmusik") {
      setIsUnlocked(true);
    } else {
      alert("Fel lösenord.");
    }
  };

  return (
    <div className="broccoli-container">
      {!isUnlocked ? (
        <>
          <h2>Lucka 16</h2>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Skriv in lösenordet"
          />
          <button onClick={handleUnlock}>Öppna lucka</button>
        </>
      ) : (
        <>
          <h2>Gissa LANDET! Du har 8 försök på dig</h2>

          {/* Ensure the image is correctly placed */}
          <img
            src={Argentina}
            alt="Argentina"
            style={{
              maxWidth: "80%",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          />

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={guess}
              onChange={handleInputChange}
              placeholder="Skriv gissningen här"
              disabled={attempts.length >= maxAttempts || isCorrect}
              style={{ padding: "10px", marginBottom: "10px" }} // Inline styling for better UI
            />
            <button
              type="submit"
              disabled={attempts.length >= maxAttempts || isCorrect}
              style={{
                padding: "10px 20px",
                backgroundColor: "#d62828",
                color: "white",
              }} // Inline styling for button
            >
              Gissa
            </button>
          </form>

          {feedback && <p className="feedback">{feedback}</p>}

          {attempts.length >= maxAttempts && !isCorrect && (
            <div className="reveal"></div>
          )}
        </>
      )}
    </div>
  );
};

export default Country;
