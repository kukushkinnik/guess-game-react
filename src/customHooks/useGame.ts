import { ChangeEvent, SyntheticEvent, useState } from "react";

const useGame = () => {
  const [value, setValue] = useState<string>("");
  const [randomValue, setRandomValue] = useState<number>(randomNum);
  const [attempts, setAttempts] = useState<number>(7);
  const [result, setResult] = useState<string>("");

  function randomNum(): number {
    return Math.floor(Math.random() * 100 + 1);
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
    console.log(value);
  };

  const handleClick = (event: SyntheticEvent): void => {
    event.preventDefault();
    console.log(randomValue);
    main();
  };

  function main(): void {
    if (isNaN(+value)) {
      setResult("Not a number");
    } else if (+value !== randomValue && attempts === 1) {
      setResult("Lost");
    } else if (+value === randomValue && attempts >= 0) {
      setResult("Won");
    } else if (+value > randomValue) {
      setAttempts(attempts - 1);
      setResult("Too Big");
    } else {
      setAttempts(attempts - 1);
      setResult("Too Low");
    }

    console.log(attempts);
  }

  return {
    handleChange,
    handleClick,
    result,
  };
};

export default useGame;
