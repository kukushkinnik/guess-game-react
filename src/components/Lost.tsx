import React from "react";

import MyButton from "./UI/Button";

const Lost = () => {
  return (
    <div>
      <h1>You found yourself in karaoke singing Bakamitai forever</h1>
      <iframe
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        height="315"
        src="https://www.youtube.com/embed/MJbE3uWN9vE?playlist=MJbE3uWN9vE&start=3&autoplay=1&loop=1"
        title="YouTube video player"
        width="560"
      ></iframe>
      <MyButton
        title={"Try Again"}
        styling={"nes-btn is-error"}
        click={() => console.log("click")}
      />
    </div>
  );
};

export default Lost;
