import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import NavBar from './NavBar.js';
import ImageList from './ImageList.js';
import Bottom from './Bottom.js';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('render NavBar component', () => {
  render(<NavBar />);

  //Component is rendered
  const appBarElement = screen.getByRole('banner');
  expect(appBarElement).toBeInTheDocument();

  // Ensure that the "News" text exists
  const newsTextElement = screen.getByText(/news/i);
  expect(newsTextElement).toBeInTheDocument();

  // Ensure that the "Login" button exists
  const loginButtonElement = screen.getByText(/login/i);
  expect(loginButtonElement).toBeInTheDocument();

  // Checks if its visible and clickable
  const menuIconElement = screen.getByLabelText(/menu/i);
  expect(menuIconElement).toBeVisible();
  menuIconElement.click();
});

test('render ImageList component', () => {
  render(<ImageList/>);

  // Check if the component renders without errors
  const imageListElement = screen.getByRole('list');
  expect(imageListElement).toBeInTheDocument();
 
  // Check if the correct number of images is present
  const images = screen.getAllByRole('img');
  expect(images.length).toBe(itemData.length);
});

test('renders Bottom component', () => {
  render(<Bottom />);

  // Check if the component renders with the correct initial state
  const recentsButton = screen.getByRole('button', { name: 'Recents' });
  expect(recentsButton).toHaveAttribute('aria-current', 'page');

  // Simulate a click on the "Favorites" button
  const favoritesButton = screen.getByRole('button', { name: 'Favorites' });
  fireEvent.click(favoritesButton);

  // Check if the state updates after the click
  expect(recentsButton).not.toHaveAttribute('aria-current', 'page');
  expect(favoritesButton).toHaveAttribute('aria-current', 'page');
});

test('Integration Test', () => {
  const { getByTestId } = render(
    <>
      <NavBar />
      <ImageList />
      <Bottom />
    </>
  );

  const navbar = getByTestId('navbar');
  const bottom = getByTestId('bottom');
  const imagelist = getByTestId('imagelist');

  expect(navbar).toBeInTheDocument();
  expect(bottom).toBeInTheDocument();
  expect(imagelist).toBeInTheDocument();
});