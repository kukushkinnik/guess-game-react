import { useState } from "react";

const usePlay = () => {
  const [isStart, setStart] = useState(true);

  function loadGame() {
    setStart(!isStart);
  }
  return {
    toggle: isStart,
    loadGame,
  };
};

export default usePlay;
