import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Calendar from "./Components/Calendar";
import Door from "./Components/Door";
import Wordle from "./Components/Wordle";
import Wordle2 from "./Components/Wordle_2";
import GuessSong from "./Components/GuessSong";
import Broccoli from "./Components/Broccoli";
import Country from "./Components/Country";
import CatComponent from "./Components/Julgåta";
import Welcome from "./Components/Welcome";
import OneBComponent from "./Components/OneB";
import TicTacToe from "./Components/TicTackToe";
import FinalChallenge from "./Components/FinalChallenge";
import "./Css/Calendar.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Calendar />} />
          <Route path="/door/:doorNumber" element={<Door />} />
          <Route path="/w1" element={<Wordle />} />
          <Route path="/w2" element={<Wordle2 />} />
          <Route path="/song" element={<GuessSong />} />
          <Route path="/broccoli" element={<Broccoli />} />
          <Route path="/country" element={<Country />} />
          <Route path="/julg" element={<CatComponent />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/oneb" element={<OneBComponent />} />
          <Route path="/tictactoe" element={<TicTacToe />} />
          <Route path="/final-challenge" element={<FinalChallenge />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
