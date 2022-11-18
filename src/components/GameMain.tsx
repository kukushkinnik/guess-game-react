import React from "react";
import Button from "./UI/Button";

interface GameMainProps {
  change: (event: React.ChangeEvent<HTMLInputElement>) => void;
  click: (event: React.MouseEvent<HTMLButtonElement>) => void;
  result: string;
}

const GameMain = ({ change, click, result }: GameMainProps) => {
  return (
    <div className={"game"}>
      <div className={"rules nes-container is-dark"}>
        <p className={"nes-text is-primary is-large"}>Rules</p>
        <ul className={" is-circle"}>
          <li>You have 7 attempts</li>
          <li>Number is in range 1-100</li>
          <li>Text or empty input is not allowed!</li>
          <li>
            There is a secret hidden, that will be revealed under certain
            conditions
          </li>
        </ul>
      </div>

      <div className={"game-field nes-container is-dark"}>
        <ul className={"nes-list"}>
          <li>
            <i className={"nes-icon is-small heart"}></i>
          </li>
          <li>
            <i className={"nes-icon is-small heart"}></i>
          </li>
          <li>
            <i className={"nes-icon is-small heart"}></i>
          </li>
          <li>
            <i className={"nes-icon is-small heart"}></i>
          </li>
          <li>
            <i className={"nes-icon is-small heart"}></i>
          </li>
          <li>
            <i className={"nes-icon is-small heart"}></i>
          </li>
          <li>
            <i className={"nes-icon is-small heart"}></i>
          </li>
        </ul>
        <h1 className={"nes-text is-primary"}>{result}</h1>
        <input
          type={"text"}
          onChange={change}
          className={"nes-input is-dark"}
        />
        <Button title={"Guess"} styling={"nes-btn is-success"} click={click} />
      </div>
    </div>
  );
};

export default GameMain;
