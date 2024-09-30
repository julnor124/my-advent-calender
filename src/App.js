import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Calendar from "/Users/julianordqvist/advent-calendar/src/Components/Calendar.js";
import Door from "/Users/julianordqvist/advent-calendar/src/Components/Door.js";
import "/Users/julianordqvist/advent-calendar/src/Css/Calendar.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Calendar />} />
          <Route path="/door/:doorNumber" element={<Door />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
