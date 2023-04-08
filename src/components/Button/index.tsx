import React from 'react';
import type { PropsWithChildren } from 'react';
import classes from './Button.module.css';

type ButtonProps = PropsWithChildren<{
  label: string;
  type?: 'submit' | 'reset' | 'button' | undefined;
}>;

const Button = ({ label, type = 'submit' }: ButtonProps): JSX.Element => {
  return (
    <button type={type} className={classes.textBox}>
      {label}
    </button>
  );
};

export default Button;
