import { render, screen } from '@testing-library/react';
import App from './App';

// Test that the navbar is rendered and the links are present
test('renders navbar', () => {
  render(<App />);

  const navbarElement = screen.getByRole('navigation');
  expect(navbarElement).toBeInTheDocument();

  const homeLink = screen.getByText('Home');
  expect(homeLink).toBeInTheDocument();

  const searchLink = screen.getByText('Search');
  expect(searchLink).toBeInTheDocument();

  const catalogLink = screen.getByText('Catalog');
  expect(catalogLink).toBeInTheDocument();

  const editorLink = screen.getByText('Editor');
  expect(editorLink).toBeInTheDocument();
});
