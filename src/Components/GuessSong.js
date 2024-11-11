import React, { useState } from "react";
import "../Css/GuessSong.css"; // Correct relative path to CSS

const GuessSong = () => {
  const [guess, setGuess] = useState("");
  const [attempts, setAttempts] = useState([]);
  const [feedback, setFeedback] = useState("");
  const correctWord = "Last Christmas";
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

      if (guess.toLowerCase() === correctWord.toLowerCase()) {
        setFeedback("TJOHOOO DU ÄR JU SÅ DUKTIG!!! Det var 'Last Christmas'!");
        setIsCorrect(true);
      } else {
        setFeedback(
          attemptsLeft > 0
            ? `Dålig gissning för den var fel. Du har ${attemptsLeft} gissningar kvar.`
            : `Tråkigt att du inte var så bra... Låten var: '${correctWord}'.`
        );
      }

      setAttempts([...attempts, guess]);
      setGuess("");
    }
  };

  const handleUnlock = () => {
    if (password === "julpynt") {
      setIsUnlocked(true);
    } else {
      alert("Fel lösenord.");
    }
  };

  return (
    <div className="guesssong-container">
      {!isUnlocked ? (
        <>
          <h2>Lucka 3</h2>
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
          <h2>Gissa LÅTEN! Du har 5 försök på dig</h2>

          {/* Ensure the video is correctly placed */}
          <video
            width="400" // Set a fixed width
            height="225" // Set a fixed height (this maintains a 16:9 aspect ratio)
            controls
            autoPlay={false}
            className="video"
            src="guess_the_song.mp4" // Make sure this path is correct
          >
            Your browser does not support the video tag.
          </video>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={guess}
              onChange={handleInputChange}
              placeholder="Skriv gissningen här"
              disabled={attempts.length >= maxAttempts || isCorrect}
            />
            <button
              type="submit"
              disabled={attempts.length >= maxAttempts || isCorrect}
            >
              Submit
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

export default GuessSong;
