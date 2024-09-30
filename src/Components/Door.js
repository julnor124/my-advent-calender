import React, { useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams to get the door number
import "/Users/julianordqvist/advent-calendar/src/Css/Door.css";

const Door = () => {
  const { doorNumber } = useParams(); // Get door number from URL

  const [password, setPassword] = useState(""); // State to hold the password input
  const [isUnlocked, setIsUnlocked] = useState(false); // State to check if the door is unlocked

  const passwords = [
    "välkommen",
    "tomtenisse",
    "julpynt",
    "godmorgon",
    "pepparkaka",
    "lussebulle",
    "julkalender",
    "glögg",
    "skumtomte",
    "rudolf",
    "mistel",
    "tomte",
    "luciatåg",
    "pepparkaksform",
    "chokladfudge",
    "julmusik",
    "alliwantforchristmas",
    "släde",
    "tomtemor",
    "presentpapper",
    "paket",
    "snö",
    "juliaärbäst",
    "godjuljagälskarer",
  ];

  // Background color function
  const getBackgroundColor = () => {
    switch (doorNumber) {
      case "1":
        return "#ffdddd"; // Light red
      case "2":
        return "#ddffdd"; // Light green
      case "3":
        return "#ddddff"; // Light blue
      case "4":
        return "#ffffdd"; // Light yellow
      case "5":
        return "#ffddff"; // Light purple
      case "6":
        return "#ddffff"; // Light cyan
      case "7":
        return "#ffefdd"; // Light peach
      case "8":
        return "#ddffee"; // Light mint
      case "9":
        return "#f0ddff"; // Light lavender
      case "10":
        return "#ffdd99"; // Light gold
      case "11":
        return "#ffccdd"; // Light coral
      case "12":
        return "#ffeedd"; // Light blush
      case "13":
        return "#ddffcc"; // Light sea green
      case "14":
        return "#ccddff"; // Light sky blue
      case "15":
        return "#ddccff"; // Light periwinkle
      case "16":
        return "#fff0dd"; // Light cream
      case "17":
        return "#ffcc99"; // Light tan
      case "18":
        return "#ffccff"; // Light violet
      case "19":
        return "#dd99ff"; // Light orchid
      case "20":
        return "#ffdddd"; // Light rose
      case "21":
        return "#ddffdd"; // Light forest green
      case "22":
        return "#ddddff"; // Light slate blue
      case "23":
        return "#ffccdd"; // Light salmon
      case "24":
        return "#f0e68c"; // Khaki
      default:
        return "#ffffff"; // Default color
    }
  };

  // Door description function
  const getDoorDescription = () => {
    switch (doorNumber) {
      case "1":
        return "Welcome to Door 1! Start your adventure.";
      case "2":
        return "Door 2 reveals a surprise gift!";
      case "3":
        return "Discover a delightful treat behind Door 3.";
      case "4":
        return "Door 4 holds a special message!";
      case "5":
        return "Unwrap the mystery of Door 5.";
      case "6":
        return "A festive cheer awaits behind Door 6.";
      case "7":
        return "Door 7 brings holiday joy!";
      case "8":
        return "Find something sweet behind Door 8.";
      case "9":
        return "Door 9 has a cheerful surprise!";
      case "10":
        return "Open Door 10 for some fun!";
      case "11":
        return "Door 11 holds a heartwarming message.";
      case "12":
        return "Behind Door 12 lies a wonderful surprise.";
      case "13":
        return "A joyful experience awaits behind Door 13.";
      case "14":
        return "Open Door 14 for a special gift!";
      case "15":
        return "Door 15 has a delightful surprise!";
      case "16":
        return "Find a treat behind Door 16.";
      case "17":
        return "Door 17 brings a magical moment.";
      case "18":
        return "Unlock joy with Door 18!";
      case "19":
        return "Behind Door 19, there's a surprise waiting!";
      case "20":
        return "Door 20 is filled with holiday spirit.";
      case "21":
        return "Open Door 21 for a cozy surprise!";
      case "22":
        return "Door 22 has a lovely treat.";
      case "23":
        return "Unlock the magic behind Door 23.";
      case "24":
        return "Congratulations! You've reached Door 24.";
      default:
        return "Welcome to the Advent Calendar!";
    }
  };

  // Unlocking function
  const handleUnlock = () => {
    if (password === passwords[doorNumber - 1]) {
      setIsUnlocked(true); // Unlock the door
    } else {
      alert("Incorrect password. Please try again."); // Alert for incorrect password
    }
  };

  return (
    <div
      className="door-content"
      style={{ backgroundColor: getBackgroundColor() }}
    >
      {!isUnlocked ? (
        <>
          <h1>Lucka {doorNumber}</h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
          />
          <button onClick={handleUnlock}>Unlock</button>
        </>
      ) : (
        <div>
          <h1>Välkommen till Lucka {doorNumber}!</h1>
          <img
            src={`./images/door${doorNumber}.jpg`}
            alt={`Door ${doorNumber}`}
          />
          <p className="door-description">{getDoorDescription()}</p>
        </div>
      )}
    </div>
  );
};

export default Door;
