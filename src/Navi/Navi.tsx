import React from 'react';
import styled from 'styled-components';
import Button from '../Components/Button';

const Navi = () => {
  return (
    <>
      <Header>
        <h1>MU Board</h1>
        <Nav>
          <input placeholder='search' />
          <Button title='로그인' />
          <Button title='회원가입' />
        </Nav>
      </Header>
    </>
  );
};

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 15px 20px 4px;
  border-bottom: 1px solid ${(props) => props.theme.color.main};
  color: ${(props) => props.theme.color.text};

  > h1 {
    font-size: 4rem;
    color: ${(props) => props.theme.color.logo};
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
`;

export default Navi;
