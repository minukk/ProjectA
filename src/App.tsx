import React from 'react';
import ReactDOM from 'react-dom';

interface Props {}

const App = ({}: Props) => {
  return <div>Hi React</div>;
};

ReactDOM.render(<App />, document.getElementById('root'));
