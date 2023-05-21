import React from 'react';
import ReactDOM from 'react-dom';
import { Widget } from '@rango-dev/widget-embedded';

const App = () => {
  return (
      <Widget />
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
