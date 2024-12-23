import React, { useState } from "react";
import "../Css/FinalChallenge.css"; // Correct relative path to the CSS file
import trex from "../Images/aladdin.jpg"; // Correct relative path to the image
import Confetti from "react-confetti"; // Import react-confetti

const OneBComponent = () => {
  const [guess, setGuess] = useState("");
  const [attempts, setAttempts] = useState([]);
  const [feedback, setFeedback] = useState("");
  const correctWord = "gräddnougat";
  const maxAttempts = 3;
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

      // Normalize the guess by removing spaces, dashes, and converting to lowercase
      const normalizedGuess = guess.toLowerCase().replace(/[\s-]/g, ""); // Remove spaces and dashes

      if (normalizedGuess === correctWord) {
        setFeedback(
          "SÅJAAAA GRÄDDISEEEEN VAR RÄTT!! GOD JUL PÅ ER!! Leta upp julkalenderstomten för en överraskning`<3"
        );
        setIsCorrect(true);
      } else {
        setFeedback(
          attemptsLeft > 0
            ? `Tyvärr var det fel, gissa igen. Du har ${attemptsLeft} gissningar kvar.`
            : `Aj aj aj! Rätt svar var: '${correctWord}'. Men vet du vad, det är okej. Leta upp julkalenderstomten för en överraskning`
        );
      }

      setAttempts([...attempts, guess]);
      setGuess("");
    }
  };

  return (
    <div className="broccoli-container">
      {/* Conditionally render confetti */}
      {isCorrect && <Confetti />}

      <h2>
        Aladdinasken är ett klassiskt julgodis som introducerades 1939 som en
        "folkligare" ask med praliner. Men vilken är egentligen Julias
        favoritsmak? Du har 3 försök på dig:
      </h2>

      <img
        src={trex}
        alt="trex"
        style={{
          maxWidth: "70%",
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
          style={{ padding: "10px", marginBottom: "10px" }}
        />
        <button
          type="submit"
          disabled={attempts.length >= maxAttempts || isCorrect}
          style={{
            padding: "10px 20px",
            backgroundColor: "#d62828",
            color: "white",
          }}
        >
          Gissa
        </button>
      </form>

      {feedback && <p className="feedback">{feedback}</p>}

      {attempts.length >= maxAttempts && !isCorrect && (
        <div className="reveal"></div>
      )}
    </div>
  );
};

export default OneBComponent;
