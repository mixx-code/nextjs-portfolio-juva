import React, { FC, MouseEventHandler } from "react";

interface ButtonProps {
  link?: string;
  children?: string;
}

const ButtonPrimary: FC<ButtonProps> = ({ link, children }) => {
  return (
    <a
      className="bg-primary  font-bold rounded-lg px-6 py-2 justify-start"
      href={link}
    >
      {children}
    </a>
  );
};

export default ButtonPrimary;
