import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonProps } from 'src/Type/interface';
import styled from 'styled-components';

const Button = ({ title, link }: ButtonProps) => {
  return (
    <Link to={link}>
      <ButtonStyle type='button'>{title}</ButtonStyle>
    </Link>
  );
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
