import React from 'react';
import styled from 'styled-components';
import Card from './Card/Card';
import Skeleton from './Skeleton/Skeleton';

const Main = () => {
  return (
    <main>
      <CardWrap>
        {/* {CARD_INFO.map((card, idx) => {
          return <Card key={card + idx} user={card} idx={idx} />;
        })} */}
        {Array(10)
          .fill(0)
          .map(() => {
            return <Skeleton />;
          })}
      </CardWrap>
    </main>
  );
};

const CARD_INFO: string[] = ['min', 'uk', 'jin', 'jung', 'kang', 'min', 'uk', 'jin', 'jung', 'kang'];

const CardWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 30px 24px;
`;

export default Main;
