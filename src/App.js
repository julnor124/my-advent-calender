import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Calendar from "./Components/Calendar"; // Relative path
import Door from "./Components/Door"; // Relative path
import Wordle from "./Components/Wordle"; // Relative path
import Wordle2 from "./Components/Wordle_2"; // Relative path
import GuessSong from "./Components/GuessSong"; // Relative path
import Broccoli from "./Components/Broccoli"; // Relative path
import Country from "./Components/Country"; // Relative path
import CatComponent from "./Components/Julgåta"; // Relative path
import Welcome from "./Components/Welcome"; // Relative path

import "./Css/Calendar.css"; // Relative path

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
