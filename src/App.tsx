import React from 'react';
import ReactDOM from 'react-dom';
import Account from './Test/Account';

const App: React.FC = () => {
  return (
    <div>
      Hi React
      <Account name='min' mbti='INJF' />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
