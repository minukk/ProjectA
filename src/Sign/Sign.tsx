import React from 'react';
import styled from 'styled-components';

const Sign = () => {
  return (
    <SignWrap>
      <SignBox>
        <h2>로그인</h2>
        <input placeholder='이메일' />
        <input placeholder='비밀번호' />
      </SignBox>
    </SignWrap>
  );
};

const SignWrap = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
`;

const SignBox = styled.section`
  width: 40%;
  height: 500px;
  padding: 30px;
  border: 1px solid ${(props) => props.theme.color.main};
  border-radius: 7px;

  > h2 {
    padding: 20px 0 40px;
    border-bottom: 1px solid ${(props) => props.theme.color.main};
    text-align: center;
    font-size: 32px;
    color: ${(props) => props.theme.color.logo};
  }
`;

export default Sign;
