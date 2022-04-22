import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../Components/Button';

const Navi = () => {
  return (
    <>
      <Header>
        <h1>
          <Link to='/'>MU Board</Link>
        </h1>
        <Nav>
          <input placeholder='search' />
          <ButtonWrap>
            <Button title='로그인' link='/sign' />
            <Button title='회원가입' link='/sign' />
          </ButtonWrap>
        </Nav>
      </Header>
    </>
  );
};

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 24px 40px 14px;
  border-bottom: 1px solid ${(props) => props.theme.color.main};
  color: ${(props) => props.theme.color.text};

  > h1 {
    font-size: 4rem;
    color: ${(props) => props.theme.color.logo};
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;

  > input {
    width: 250px;
    height: 40px;
    padding: 10px;
    border: 1px solid ${(props) => props.theme.color.main};
    border-radius: 6px;
    text-align: center;
    color: ${(props) => props.theme.color.text};
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  width: 30%;
`;

export default Navi;
