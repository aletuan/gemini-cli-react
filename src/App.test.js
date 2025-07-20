import { render, screen } from '@testing-library/react';
import App from './App';

test('renders registration form', () => {
  render(<App />);
  const headingElement = screen.getByText(/registration form/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders form fields', () => {
  render(<App />);
  const firstNameLabel = screen.getByText(/first name/i);
  const lastNameLabel = screen.getByText(/last name/i);
  const emailLabel = screen.getByText(/email/i);
  
  expect(firstNameLabel).toBeInTheDocument();
  expect(lastNameLabel).toBeInTheDocument();
  expect(emailLabel).toBeInTheDocument();
});
