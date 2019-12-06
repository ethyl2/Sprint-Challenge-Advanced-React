import React from 'react';
import ReactDOM from 'react-dom';
//import * as rtl from 'react-testing-library';
import { render } from '@testing-library/react';
//import 'jest-dom/extend-expect';
//import '@testing-library/jest-dom';
import App from './App';
import expectExport from 'expect';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
/*
test('It renders an h2 with Women\'s World Cup Players', () => {
  const { getByText } = render(<App />);
  const h2El = getByText(/world cup/i);
  expect(h2El).toBeInTheDocument();
})
*/