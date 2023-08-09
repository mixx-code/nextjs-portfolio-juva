import React, { FC, MouseEventHandler } from 'react';

interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
  children?: string;
}

const ButtonPrimary: FC<ButtonProps> = ({ onClick, type = 'button', children }) => {
  return (
    <button className="bg-primary  font-bold rounded-lg px-6 py-2 justify-start" type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonPrimary;