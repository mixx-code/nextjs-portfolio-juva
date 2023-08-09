import React, { FC, MouseEventHandler } from 'react';

interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
  children?: string;
}

const ButtonSecondary: FC<ButtonProps> = ({ onClick, type = 'button', children }) => {
  return (
    <button className="border border-black rounded-lg px-6 py-2 justify-start" type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonSecondary;