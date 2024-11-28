import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';

test('Should be link with text More on start page', () => {
  render(<App />);
  const linkElement = screen.getByText(/More/i);
  expect(linkElement).toBeInTheDocument();
});

test('Should be link with text Books on start page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Books/i);
  expect(linkElement).toBeInTheDocument();
});

test('Should be link with text Movies on start page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Movies/i);
  expect(linkElement).toBeInTheDocument();
});

test('Should be link with text Activities on start page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Activities/i);
  expect(linkElement).toBeInTheDocument();
});


test('Should be icon with link to start page in the form of house', () => {
  render(<App />);
  const iconElement = screen.getByTestId('home');
  expect(iconElement).toBeInTheDocument();
});

test('Should render calender icon on start page', () => {
  render(<App />);
  const iconElement = document.querySelector('.calendar-icon');
  expect(iconElement).toBeInTheDocument();
});

test("calls onClick when button is clicked", () => {
  const handleClick = jest.fn();
  render(<App />);
  const button = screen.getByTestId('snowButton');
  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalledTimes(1);
  
});
