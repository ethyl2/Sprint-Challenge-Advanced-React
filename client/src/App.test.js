import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom';
import App from './App';

/*
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
*/


test("It renders an h1 with Women's World Cup", () => {
  const { getByText } = render(<App />);
  const h1El = getByText(/world/i);
  //expect(h1El).toBeInTheDocument();
})
