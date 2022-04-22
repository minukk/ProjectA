import React from 'react';
import { CardProps } from 'src/Type/interface';
import styled from 'styled-components';

const Card = ({ user, idx }: CardProps) => {
  return (
    <CardWrap>
      <img alt='image' src={`https://picsum.photos/345/240?random=${idx}`} />
      <h3>{user}</h3>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </CardWrap>
  );
};

const CardWrap = styled.li`
  width: 23%;
  height: 400px;
  margin-left: 20px;
  margin-bottom: 30px;
  border: 1px solid ${(props) => props.theme.color.main};
  border-radius: 7px;

  > h3 {
    margin: 20px 10px 10px;
    font-size: 22px;
  }

  > img {
    display: block;
    width: 100%;
    height: 250px;
    margin: 0 auto;
    border-radius: 7px;
  }

  > p {
    height: 70px;
    padding: 10px;
    overflow: hidden;
  }
`;

export default Card;
