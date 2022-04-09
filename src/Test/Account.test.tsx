import { render } from '@testing-library/react';
import Account from './Account';

it('matches snapshot', () => {
  const utils = render(<Account name='min' mbti='INFJ' />);
  expect(utils.container).toMatchSnapshot();
});

it('shows the props correctly', () => {
  const utils = render(<Account name='min' mbti='INFJ' />);
  utils.getByText('min');
  utils.getByText('ABCD');
});
