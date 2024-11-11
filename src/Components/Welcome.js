import React, { useState } from "react";
import "../Css/GuessSong.css"; // Correct relative path for CSS file

const Welcome = () => {
  const [password, setPassword] = useState(""); // State for password input
  const [isUnlocked, setIsUnlocked] = useState(false); // State to check if the door is unlocked

  const handleUnlock = () => {
    if (password === "välkommen") {
      // Set your correct password here
      setIsUnlocked(true); // Unlock the door
    } else {
      alert("Incorrect password. Please try again."); // Alert for incorrect password
    }
  };

  return (
    <div className="guesssong-container">
      {!isUnlocked ? (
        <>
          <h2>Lucka 1</h2>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Lösenord"
          />
          <button onClick={handleUnlock}>Lås upp</button>
        </>
      ) : (
        <>
          <h2>WOHOOO ÄNTLIGEN DECEMBER OCH SNART JUL NU KÖR VI!!!</h2>

          {/* Video element to show after unlocking */}
          <video
            width="400" // Set a fixed width
            height="225" // Set a fixed height (this maintains a 16:9 aspect ratio)
            controls
            autoPlay={false}
            className="video"
            src="welcome-video.mp4" // Ensure the path to the video is correct
          >
            Your browser does not support the video tag.
          </video>
        </>
      )}
    </div>
  );
};

export default Welcome;
