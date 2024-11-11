import React, { useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams to get the door number
import "/Users/julianordqvist/advent-calendar/src/Css/Door.css";
import receptJul from "/Users/julianordqvist/advent-calendar/src/Images/recept_jul.jpg";
import juliaJul from "/Users/julianordqvist/advent-calendar/src/Images/julia_jul.jpg";
import Lucia from "/Users/julianordqvist/advent-calendar/src/Components/Lucia.js";
import Reindeer from "/Users/julianordqvist/advent-calendar/src/Components/Reindeer.js";
import juliahem from "/Users/julianordqvist/advent-calendar/src/Images/kommer-hem.jpg";
import Syskon from "/Users/julianordqvist/advent-calendar/src/Images/syskon.jpg";
import Prommis from "/Users/julianordqvist/advent-calendar/src/Images/jul-promenad.jpg";
import AndraAdvent from "/Users/julianordqvist/advent-calendar/src/Images/andra-advent.jpg";
import TredjeAdvent from "/Users/julianordqvist/advent-calendar/src/Images/tredje-advent.jpg";
import FjärdeAdvent from "/Users/julianordqvist/advent-calendar/src/Images/fjärde-advent.jpg";
import Föräldrar from "/Users/julianordqvist/advent-calendar/src/Images/mamma-pappa.jpg";
import Grinchen from "/Users/julianordqvist/advent-calendar/src/Images/grinchen.jpg";
import Skratt from "/Users/julianordqvist/advent-calendar/src/Images/skratt.jpg";
import "/Users/julianordqvist/advent-calendar/src/Css/Lucia.css";

const passwords = {
  1: "välkommen",
  2: "tomtenisse",
  3: "julpynt",
  4: "godmorgon",
  5: "pepparkaka",
  6: "lussebulle",
  7: "julkalender",
  8: "glögg",
  9: "skumtomte",
  10: "lutfisk",
  11: "mistel",
  12: "tomte",
  13: "luciatåg",
  14: "pepparkaksform",
  15: "chokladfudge",
  16: "julmusik",
  17: "alliwantforchristmas",
  18: "släde",
  19: "tomtemor",
  20: "presentpapper",
  21: "paket",
  22: "snö",
  23: "juliaärbäst",
  24: "godjuljagälskarer",
};

const Door = () => {
  const { doorNumber } = useParams(); // Get door number from URL

  const [password, setPassword] = useState(""); // State to hold the password input
  const [isUnlocked, setIsUnlocked] = useState(false); // State to check if the door is unlocked

  // Background color function
  const getBackgroundColor = () => {
    const colors = {
      1: "#ffdddd",
      2: "#ffdddd",
      3: "#ddddff",
      4: "#ffffdd",
      5: "#ffddff",
      6: "#ddffff",
      7: "#ffefdd",
      8: "#ddffee",
      9: "#f0ddff",
      10: "#ffdd99",
      11: "#ffccdd",
      12: "#ffeedd",
      13: "#ddffcc",
      14: "#ccddff",
      15: "#ddccff",
      16: "#fff0dd",
      17: "#ffcc99",
      18: "#ffccff",
      19: "#dd99ff",
      20: "#ffdddd",
      21: "#ddffdd",
      22: "#ddddff",
      23: "#ffccdd",
      24: "#f0e68c",
    };
    return colors[doorNumber] || "#ffffff"; // Default color
  };

  // Door description function
  const getDoorDescription = () => {
    switch (doorNumber) {
      case "1":
        return (
          <div>
            <p>Welcome to Door 1! Start your adventure with a special video.</p>
            <video
              width="400" // Set a fixed width
              height="225" // Set a fixed height (this maintains a 16:9 aspect ratio)
              controls
              autoPlay={false}
              className="video"
              src="welcome-video.mp4" // Make sure this path is correct
            />
          </div>
        );
      case "2":
        return (
          <div>
            <p>Dagens lucka är hur man får en lyckad jul!</p>
            <img
              src={receptJul}
              alt="Recept Jul"
              style={{ maxWidth: "100%", borderRadius: "10px" }}
            />
          </div>
        );
      case "3":
        return "Discover a delightful treat behind Door 3.";
      case "4":
        return "Door 4 holds a special message!";
      case "5":
        return (
          <div>
            <p>
              Dagens lucka är ju såklart jag, för jag är alltid en gåva till
              mänskligheten!
            </p>
            <img
              src={juliaJul}
              alt="Julia Jul"
              style={{ maxWidth: "50%", borderRadius: "100px" }}
            />
          </div>
        );
      case "6":
        return (
          <div>
            <p>
              Dagens lucka är lugn. Ät valfri sötsak och njut av denna brasa.
            </p>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/L_LUpnjgPso"
              title="Fireplace Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ maxWidth: "100%", borderRadius: "10px" }}
            ></iframe>
          </div>
        );
      case "7":
        return "Door 7 brings holiday joy!";
      case "8":
        return (
          <div>
            <p>
              Glad Andra Advent! När andra ljuset brinner är snart lucia här,
              hon bjuder oss på kaffe och bud om julen bär
            </p>
            <img
              src={AndraAdvent}
              alt="Andra Advent"
              style={{
                maxWidth: "100%",
                borderRadius: "100px",
                width: "700px",
              }}
            />
          </div>
        );
      case "9":
        return "Idag får ni en utmaning. Jag vill att ni skickar en selfie på er själva i familjegruppchatten där temat är: JUL. Kreativitet uppskattas. Ses i chatten!!!";
      case "10":
        return "hej";
      case "11":
        return (
          <div>
            <p>Här får ni en gullig liten bild på oss syskon</p>
            <img
              src={Syskon}
              alt="Syskon"
              style={{
                maxWidth: "70%",
                borderRadius: "100px",
                width: "700px",
              }}
            />
          </div>
        );
      case "12":
        return (
          <div>
            <p>Dagens lucka är ett JULSKÄMT!!!</p>
            <div>
              – Var det många som dansade runt granen? – Nä, inte en kotte.
            </div>
            <div>
              <img
                src={Skratt}
                alt="Skratt"
                style={{
                  maxWidth: "70%",
                  borderRadius: "100px",
                  width: "700px",
                }}
              ></img>
            </div>
          </div>
        );
      case "13":
        return (
          <div>
            <p>
              Hjälp Lucia att undvika vattendropparna så hennes ljuskrona inte
              slocknar!
            </p>
            <Lucia />
          </div>
        );
      case "14":
        return "Idag får ni en ny utmaning. Jag vill att ni skickar en julhälsning i form av en video i familjegruppchatten. Kan vi inte ses, kan vi säga hej digitalt. Ses i chatten!!!";
      case "15":
        return (
          <div>
            <p>
              Glad Tredje Advent! När tredje ljuset brinner, vi juleklappar syr,
              och mamma bakar kakor, och har ett fasligt styr
            </p>
            <img
              src={TredjeAdvent}
              alt="Tredje Advent"
              style={{
                maxWidth: "100%",
                borderRadius: "100px",
                width: "700px",
              }}
            />
          </div>
        );
      case "16":
        return "Find a treat behind Door 16.";
      case "17":
        return (
          <div>
            <p>
              Här får ni en av mina favoritbilder på mamma och pappa! Kolla vad
              gulliga
            </p>
            <img
              src={Föräldrar}
              alt="Föräldrar"
              style={{
                maxWidth: "70%",
                borderRadius: "100px",
                width: "700px",
              }}
            />
          </div>
        );
      case "18":
        return (
          <div>
            <p>Dagens lucka är en ny UTMANING!!!</p>
            <p>
              Idag ska ni swisha mig valfri summa för att jag varit så snäll som
              har fixat denna julkalender till er :D
            </p>
            <div>
              JAG BARA SKOJADEEEE, idag ska ni spela in ett ljudklipp och säga
              ert bästa julskämt. Ses i chatten!!!
            </div>
          </div>
        );
      case "19":
        return (
          <div>
            <p>Grattis familjen!</p>
            <img
              src={juliahem}
              alt="Julia Hem"
              style={{
                maxWidth: "50%",
                borderRadius: "100px",
                width: "700px",
              }}
            />
          </div>
        );
      case "20":
        return (
          <div>
            <p>IDAG ska vi ut i kylan och gå på en promenad tillsammas!!! :D</p>
            <img
              src={Prommis}
              alt="promenad"
              style={{
                maxWidth: "60%",
                borderRadius: "100px",
                width: "1000px",
              }}
            />
          </div>
        );
      case "21":
        return "Open Door 21 for a cozy surprise!";
      case "22":
        return (
          <div>
            <p>
              Glad Fjärde Advent! När fjärde ljuset brinner, vi hämtar julegran,
              och alla barnen räknar, dan före dan före dopparedan
            </p>
            <img
              src={FjärdeAdvent}
              alt="Fjärde Advent"
              style={{
                maxWidth: "100%",
                borderRadius: "100px",
                width: "700px",
              }}
            />
          </div>
        );
      case "23":
        return (
          <div>
            <p>
              EN DAG KVAR TILL JULAFTON och det firar vi med att vi ska kolla en
              julfilm tillsammans (jag slänger in förslaget grinchen) MEN jag är
              öppen för förslag!!!
            </p>
            <img
              src={Grinchen}
              alt="Grinchen"
              style={{
                maxWidth: "70%",
                borderRadius: "100px",
                width: "700px",
              }}
            />
          </div>
        );
      case "24":
        return (
          <div>
            <p>Klara ut spelet för en överraskning!</p>
            <Reindeer />
          </div>
        );
      default:
        return "Welcome to the Advent Calendar!";
    }
  };

  // Unlocking function
  const handleUnlock = () => {
    if (password === passwords[doorNumber]) {
      setIsUnlocked(true); // Unlock the door
    } else {
      alert(
        "Aja baja, försök inte lista ut lösenordet i förväg! (om du har lösenordet så testa skriv in igen, du var väl bara lite dålig när du skrev in det:D)"
      ); // Alert for incorrect password
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
            placeholder="Skriv lösenord"
          />
          <button onClick={handleUnlock}>Lås upp</button>
        </>
      ) : (
        <div>
          <h1>Välkommen till lucka {doorNumber}!</h1>
          <p className="door-description">{getDoorDescription()}</p>
        </div>
      )}
    </div>
  );
};

export default Door;
