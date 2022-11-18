import React from "react";
import "../styles/game.css";
import Lost from "./Lost";
import Win from "./Win";
import GameMain from "./GameMain";
import useGame from "../customHooks/useGame";

const Game = () => {
  const { handleChange, handleClick, result } = useGame();
  return result === "" ||
    result === "Too Big" ||
    result === "Too Low" ||
    result === "Not a number" ? (
    <GameMain change={handleChange} click={handleClick} result={result} />
  ) : result === "Won" ? (
    <Win />
  ) : (
    <Lost />
  );
};

export default Game;
