import React, { FC } from 'react';
import classes from './TextBox.module.css';

export interface TextBoxProps {
  placeholder: string;
  value: string;
  onChange: (e: any) => void;
}

const TextBox: FC<TextBoxProps> = ({ placeholder, value, onChange }) => {
  return (
    <input
      type='text'
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={classes.textBox}
    />
  );
};

export default TextBox;
