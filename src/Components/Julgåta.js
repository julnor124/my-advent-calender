import React, { useState } from "react";
import "../Css/Broccoli.css"; // Correct relative path to the CSS file
import Cat from "../Images/cat.jpg"; // Correct relative path to the image

const CatComponent = () => {
  const [guess, setGuess] = useState("");
  const [attempts, setAttempts] = useState([]);
  const [feedback, setFeedback] = useState("");
  const correctWord = "Lussekatt";
  const correctWord2 = "Lussekatten";
  const correctWord3 = "Lussekatter";
  const correctWord4 = "Lussekatterna";
  const almostcorrectWord5 = "lussebulle";
  const almostcorrectWord6 = "lussebullen";
  const almostcorrectWord7 = "lussebullar";
  const maxAttempts = 3;
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
        guess.toLowerCase() === correctWord2.toLowerCase() ||
        guess.toLowerCase() === correctWord3.toLowerCase() ||
        guess.toLowerCase() === correctWord4.toLowerCase()
      ) {
        setFeedback("Du är allt klurig du, snyggt jobbat! Lussekatt var rätt");
        setIsCorrect(true);
      } else if (
        guess.toLowerCase() === almostcorrectWord5 ||
        guess.toLowerCase() === almostcorrectWord6 ||
        guess.toLowerCase() === almostcorrectWord7
      ) {
        setFeedback("Det är i princip rätt, men kom ihåg att det är en KATT!");
      } else {
        setFeedback(
          attemptsLeft > 0
            ? `Fel svar. Du har ${attemptsLeft} gissningar kvar.`
            : `Aj då det gick inte hela vägen, rätt svar var: '${correctWord}'.`
        );
      }

      setAttempts([...attempts, guess]);
      setGuess("");
    }
  };

  const handleUnlock = () => {
    if (password === "lutfisk") {
      setIsUnlocked(true);
    } else {
      alert("Fel lösenord.");
    }
  };

  return (
    <div className="broccoli-container">
      {!isUnlocked ? (
        <>
          <h2>Lucka 10</h2>
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
          <h2>
            Lista ut JULGÅTAN! Du har 3 försök på dig: Vilken katt trivs bäst i
            värmen?
          </h2>

          <img
            src={Cat}
            alt="Cat"
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
        </>
      )}
    </div>
  );
};

export default CatComponent;
