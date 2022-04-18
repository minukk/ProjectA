import React from 'react';

const Account = (props: { name: string; mbti: string }) => {
  return (
    <div className='container'>
      <h2 data-testid='name'>{props.name}</h2>
      <p data-testid='mbti'>{props.mbti}</p>
    </div>
  );
};

export default Account;
