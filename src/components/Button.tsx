import React from "react";

interface ButtonProps {
  title: string;
  styling: string;
  click: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ title, styling, click }: ButtonProps) => {
  return (
    <button className={styling} onClick={click}>
      {title}
    </button>
  );
};

export default Button;
