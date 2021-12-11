import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

it('should render the home page', async () => {
  const { container } = render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  const homePage = await screen.findByText('Hi from the home page!!!!!');
  const kickball = await screen.findByText('Kickball', { exact: false });

  expect(homePage, kickball).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
