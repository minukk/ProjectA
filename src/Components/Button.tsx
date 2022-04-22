import React from 'react';
import { ButtonProps } from 'src/Type/interface';
import styled from 'styled-components';

const Button = ({ title }: ButtonProps) => {
  return <ButtonStyle>{title}</ButtonStyle>;
};

const ButtonStyle = styled.button`
  width: 100px;
  height: 40px;
  margin: 7px;
  background-color: ${(props) => props.theme.color.main};
  border-radius: 6px;
  color: ${(props) => props.theme.color.white};

  &:hover {
    background-color: ${(props) => props.theme.color.hover};
    cursor: pointer;
  }
`;

export default Button;
