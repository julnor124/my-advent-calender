import React, { useState } from "react";
import "../Css/Wordle.css"; // Correct relative path for CSS file

const Wordle = () => {
  const [guess, setGuess] = useState("");
  const [attempts, setAttempts] = useState([]);
  const correctWord = "NISSE"; // Set your Wordle word here
  const [password, setPassword] = useState(""); // State to hold the password input
  const [isUnlocked, setIsUnlocked] = useState(false); // State to check if the password is correct

  const correctPassword = "paket"; // Replace with your desired password

  const handleInputChange = (e) => {
    setGuess(e.target.value.toUpperCase()); // Convert input to uppercase
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the length of the guess
    if (guess.length < 5) {
      alert("Vänligen gissa på ett ord på 5 bokstäver."); // Alert for short guesses
      return; // Prevent further execution
    }
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
      alert("Fel lösenord."); // Alert for incorrect password
    }
  };

  const hasGuessedCorrectly = attempts.includes(correctWord);
  const maxAttemptsReached = attempts.length >= 5;

  return (
    <div className="wordle-container">
      {!isUnlocked ? ( // Show password prompt if not unlocked
        <>
          <h2>Lucka 21</h2>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Skriv lösenord"
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
              placeholder="Skriv ett ord på 5 bokstäver"
              disabled={hasGuessedCorrectly || maxAttemptsReached} // Disable input if conditions are met
            />
            <button
              type="submit"
              disabled={hasGuessedCorrectly || maxAttemptsReached}
            >
              Gissa
            </button>
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
          {maxAttemptsReached && !hasGuessedCorrectly && (
            <div className="reveal">
              <p>
                Näääää vad synd. Rätt ord var: <strong>{correctWord}</strong>
              </p>
            </div>
          )}
          {hasGuessedCorrectly && (
            <div className="reveal">
              <p>
                SÅÅÅÅÅÅÅJAAAAAAA WOHOHOHOOOOOOOOO RÄTT ORD VAR JU:{" "}
                <strong>{correctWord}. </strong>Åh vad du var duktig!
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Wordle;
