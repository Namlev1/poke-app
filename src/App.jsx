import "./App.css";
import Header from "./components/Header.jsx";
import Game from "./components/Game.jsx";
import {useState} from "react";

function App() {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
  return (
    <>
      <Header score={score} highScore={highScore} />
      <Game setScore={setScore} setHighScore={setHighScore} score={score} highScore={highScore} />
    </>
  );
}

export default App;
