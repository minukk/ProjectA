import React from 'react';
import { ButtonProps } from 'src/Type/interface';

const Button = ({ title }: ButtonProps) => {
  return <button>{title}</button>;
};

export default Button;
