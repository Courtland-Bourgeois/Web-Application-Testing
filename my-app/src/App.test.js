import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
});

test('renders scoreboard header', () => {
  const { getByText } = render(<App />)
  getByText(/mlb scoreboard/i);
})

test('renders strikes header', () => {
  const { getByText } = render(<App />)
  getByText(/strikes/i);
})

test('renders scoreboard header', () => {
  const { getByText } = render(<App />)
  getByText(/balls/i);
})
