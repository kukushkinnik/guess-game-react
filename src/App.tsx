import React, { useState } from "react";
import "nes.css/css/nes.min.css";
import Start from "./components/Start";
import Game from "./components/Game";
import usePlay from "./customHooks/usePlay";

function App() {
  const { toggle, loadGame } = usePlay();

  return toggle ? <Start loadGame={loadGame} /> : <Game />;
}

export default App;

