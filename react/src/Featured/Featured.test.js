import React from 'react';
import ReactDOM from 'react-dom';
import Featured from './Featured';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Featured />, div);
  ReactDOM.unmountComponentAtNode(div);
});
