import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Calendar from "/Users/julianordqvist/advent-calendar/src/Components/Calendar.js";
import Door from "/Users/julianordqvist/advent-calendar/src/Components/Door.js";
import Wordle from "/Users/julianordqvist/advent-calendar/src/Components/Wordle.js";
import Wordle2 from "/Users/julianordqvist/advent-calendar/src/Components/Wordle_2.js";
import GuessSong from "/Users/julianordqvist/advent-calendar/src/Components/GuessSong.js";
import Broccoli from "/Users/julianordqvist/advent-calendar/src/Components/Broccoli.js";
import Country from "/Users/julianordqvist/advent-calendar/src/Components/Country.js";
import CatComponent from "/Users/julianordqvist/advent-calendar/src/Components/Julgåta.js";
import Welcome from "./Components/Welcome";

import "/Users/julianordqvist/advent-calendar/src/Css/Calendar.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Calendar />} />
          <Route path="/door/:doorNumber" element={<Door />} />
          <Route path="/w1" element={<Wordle />} /> {/* Route for Wordle */}
          <Route path="/w2" element={<Wordle2 />} />{" "}
          <Route path="/song" element={<GuessSong />} />{" "}
          <Route path="/broccoli" element={<Broccoli />} />{" "}
          <Route path="/country" element={<Country />} />{" "}
          <Route path="/julg" element={<CatComponent />} />{" "}
          <Route path="/welcome" element={<Welcome />} />{" "}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
