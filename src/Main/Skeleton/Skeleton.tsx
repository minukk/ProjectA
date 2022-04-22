import React from 'react';
import styled from 'styled-components';

const Skeleton = () => {
  return (
    <SkeletonCard>
      <img />
      <h3>dd</h3>
      <p></p>
    </SkeletonCard>
  );
};

const SkeletonCard = styled.li`
  width: 23%;
  height: 400px;
  margin-left: 20px;
  margin-bottom: 30px;
  border: 1px solid ${(props) => props.theme.color.main};
  border-radius: 7px;
`;

export default Skeleton;
