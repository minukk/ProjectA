import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Account from './Account';

describe('테스트', () => {
  it('Account 컴포넌트 테스트', () => {
    render(<Account name='min' mbti='INFJ' />);
    const nameValue = screen.getByTestId('name');
    expect(nameValue).toHaveTextContent('min');
  });
  it('Account 컴포넌트 테스트', () => {
    render(<Account name='min' mbti='INFJ' />);
    const mbtiValue = screen.getByTestId('mbti');
    expect(mbtiValue).toHaveTextContent('INFJ');
  });
});
