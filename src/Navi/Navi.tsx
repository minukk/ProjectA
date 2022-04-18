import React from 'react';
import styled from 'styled-components';

const Navi = () => {
  return (
    <>
      <Header>
        <h1>MU Board</h1>
        <Nav>
          <input placeholder='search' />
          <div>회원가입</div>
          <div>로그인</div>
        </Nav>
      </Header>
    </>
  );
};

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
`;

export default Navi;
