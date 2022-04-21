import React from 'react';
import { CardProps } from 'src/Type/interface';
import styled from 'styled-components';

const Card = ({ user, idx }: CardProps) => {
  return (
    <CardWrap>
      <h3>{user}</h3>
      <img alt='image' src={`https://picsum.photos/345/240?random=${idx}`} />
    </CardWrap>
  );
};

const CardWrap = styled.div`
  width: 23%;
  height: 300px;
  margin-left: 20px;
  margin-bottom: 30px;
  border: 1px solid ${(props) => props.theme.color.main};
  border-radius: 10px;

  > h3 {
    margin: 20px;
    font-size: 22px;
  }

  > img {
    display: block;
    width: 90%;
    height: 150px;
    margin: 0 auto;
    border: 1px solid ${(props) => props.theme.color.border};
    border-radius: 7px;
  }
`;

export default Card;
