import React, { useState } from "react";
// Use relative path for the CSS file
import "../Css/Broccoli.css"; // This assumes the CSS file is inside src/Css/

// Use relative path for the image file
import carola from "../Images/carola.jpg"; // This assumes the image is inside src/Images/

const Broccoli = () => {
  const [guess, setGuess] = useState("");
  const [attempts, setAttempts] = useState([]);
  const [feedback, setFeedback] = useState("");
  const correctWord = "Carola";
  const correctWord2 = "Carola Häggkvist";
  const maxAttempts = 5;
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

      if (
        guess.toLowerCase() === correctWord.toLowerCase() ||
        guess.toLowerCase() === correctWord2.toLowerCase()
      ) {
        setFeedback("WOWOWOWOW HEJA DIG!!! Det var ju såklart CAROLA!");
        setIsCorrect(true);
      } else {
        setFeedback(
          attemptsLeft > 0
            ? `Bättre kan du, komigen då. Du har ${attemptsLeft} gissningar kvar.`
            : `Snälla var det så svårt? Det är ju CAROLA '${correctWord}'.`
        );
      }

      setAttempts([...attempts, guess]);
      setGuess("");
    }
  };

  const handleUnlock = () => {
    if (password === "julkalender") {
      setIsUnlocked(true);
    } else {
      alert("Fel lösenord.");
    }
  };

  return (
    <div className="broccoli-container">
      {!isUnlocked ? (
        <>
          <h2>Lucka 7</h2>
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
          <h2>Gissa ARTISTEN! Du har 5 försök på dig</h2>

          {/* Ensure the image is correctly placed */}
          <img
            src={carola}
            alt="Carola"
            style={{
              maxWidth: "100%",
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

export default Broccoli;
