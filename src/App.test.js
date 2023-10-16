import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import NavBar from './NavBar.js';
import ImageList from './ImageList.js';
import Bottom from './Bottom.js';

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];

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

  // Check if the component is rendered
  const bottomNavigationElement = screen.getByRole('navigation');
  expect(bottomNavigationElement).toBeInTheDocument();

  // Ensure that the "Recents" button exists
  const recentsButton = screen.getByRole('button', { name: 'Recents' });
  expect(recentsButton).toBeInTheDocument();

  // Ensure that the "Favorites" button exists
  const favoritesButton = screen.getByRole('button', { name: 'Favorites' });
  expect(favoritesButton).toBeInTheDocument();
});

test('Integration Test', () => {
  const { getByTestId } = render(
    <>
      <NavBar />
      <ImageList />
      <Bottom />
    </>
  );
 
  const navbar = screen.getByRole('banner');
  const bottom = screen.getByRole('navigation');
  const imagelist = screen.getByRole('list');

  expect(navbar).toBeInTheDocument();
  expect(bottom).toBeInTheDocument();
  expect(imagelist).toBeInTheDocument();
});
