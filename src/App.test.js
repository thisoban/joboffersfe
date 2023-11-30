import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders homepage text and app header', () => {
  // Render the component
  const { getByText,getByTestId  } = render(<App />);

  // Check if the homepage text is present
  const homePageText = getByText('home page');
  expect(homePageText).toBeInTheDocument();
  
  // Check if the header with the classname 'app-header' exists
  const appHeader = getByTestId('app-header');
  expect(appHeader).toBeInTheDocument();
});
