import React from 'react';
import styled from 'styled-components';
import Card from './Card/Card';

const Main = () => {
  return (
    <MainWrap>
      {CARD_INFO.map((card, idx) => {
        return <Card user={card} idx={idx} />;
      })}
    </MainWrap>
  );
};

const CARD_INFO: string[] = ['min', 'uk', 'jin', 'jung', 'kang', 'min', 'uk', 'jin', 'jung', 'kang'];

const MainWrap = styled.main`
  display: flex;
  flex-wrap: wrap;
  padding: 30px 24px;
`;

export default Main;
