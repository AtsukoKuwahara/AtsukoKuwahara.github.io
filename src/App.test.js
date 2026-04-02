import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

jest.mock('react-markdown', () => ({ children }) => children);

test('renders selected works overview on home page', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText(/selected works/i)).toBeInTheDocument();
  expect(screen.getAllByRole('link', { name: /explore projects/i }).length).toBeGreaterThan(0);
});
