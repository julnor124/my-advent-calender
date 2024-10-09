import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Calendar from "/Users/julianordqvist/advent-calendar/src/Components/Calendar.js";
import Door from "/Users/julianordqvist/advent-calendar/src/Components/Door.js";
import Wordle from "/Users/julianordqvist/advent-calendar/src/Components/Wordle.js"; // Import the Wordle component
import "/Users/julianordqvist/advent-calendar/src/Css/Calendar.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Calendar />} />
          <Route path="/door/:doorNumber" element={<Door />} />
          <Route path="/wordle" element={<Wordle />} /> {/* Route for Wordle */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
