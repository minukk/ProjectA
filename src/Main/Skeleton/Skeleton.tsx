import React from 'react';
import styled, { keyframes } from 'styled-components';

const Skeleton = () => {
  return (
    <SkeletonCard>
      <div />
      <span />
      <p />
    </SkeletonCard>
  );
};

const Loading = keyframes`
  0% {
    transform: translateX(0);
  }
  50%,
  100% {
    transform: translateX(300px);
  }
`;

const SkeletonCard = styled.li`
  width: 23%;
  height: 400px;
  margin-left: 20px;
  margin-bottom: 30px;
  border: 1px solid ${(props) => props.theme.color.main};
  border-radius: 7px;

  > div {
    position: relative;
    display: block;
    width: 100%;
    height: 250px;
    margin: 0 auto;
    background-color: #f2f2f2;
    border-radius: 7px;

    ::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 15px;
      height: 250px;
      background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
      border-radius: 7px;
      animation: ${Loading} 2s infinite linear;
    }
  }

  > span {
    position: relative;
    display: block;
    width: 100%;
    height: 30px;
    margin-top: 20px;
    background-color: #f2f2f2;
    font-size: 22px;

    ::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 15px;
      height: 30px;
      background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
      animation: ${Loading} 2s infinite linear;
    }
  }

  > p {
    position: relative;
    width: 100%;
    height: 70px;
    margin-top: 10px;
    padding: 10px;
    background-color: #f2f2f2;
    overflow: hidden;

    ::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 15px;
      height: 70px;
      background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
      animation: ${Loading} 2s infinite linear;
    }
  }
`;

export default Skeleton;
