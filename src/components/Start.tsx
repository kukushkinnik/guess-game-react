import React from "react";
import GM from "../assets/GM.jpg";
import Button from "./UI/Button";
import "../styles/start.css";

const Start = (props: { loadGame: any }) => {
  return (
    <div className={"start"}>
      <h1 className={"nes-text is-primary"}>Guessing Game</h1>
      <div className={"nes-container is-dark"}>
        <section className={"message-left"}>
          <img src={GM} className={"gm"} />
          <div className={"nes-balloon from-left is-dark"}>
            <p>
              Welcome hero! I have a game for you. If you win you will get a
              prize. Are you ready for it? Or you chickened out?
            </p>
          </div>
        </section>
        <div className={"controls"}>
          <Button
            title={"Play"}
            styling={"nes-btn is-success"}
            click={props.loadGame}
          />
        </div>
      </div>
    </div>
  );
};

export default Start;
