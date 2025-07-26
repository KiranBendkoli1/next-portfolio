import React, { ReactNode, MouseEventHandler } from "react";

const Button: React.FC<{
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}> = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
