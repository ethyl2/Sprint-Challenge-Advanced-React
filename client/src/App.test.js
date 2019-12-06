import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';

//import '@testing-library/jest-dom';
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
  //expect(h1El).toBeVisible();
})

test("It renders a button with toggle dark mode text", () => {
  const { getByText } = render(<App />);
  const buttonEl = getByText(/toggle/i);
  //expect(buttonEl).toBeInTheDocument();
  //expect(buttonEl).toBeVisible();
})

test("It renders an img with the alt text logo", () => {
  const { getByAltText } = render(<App />);
  const logoImg = getByAltText(/logo/i);
  //expect(logoImg).toBeInTheDocument();
  //expect(logoImg).toBeVisible();
})

test("It renders a link with learn react", () => {
  const { getByText } = render(<App />);
  const link = getByText(/learn react/i);
  //expect(link).toBeInTheDocument();
  //expect(link).toBeVisible();
})
