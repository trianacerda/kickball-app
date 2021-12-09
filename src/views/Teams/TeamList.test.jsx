import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import TeamList from './TeamList';

it('should render a list of teams', async () => {
  const { container } = render(
    <MemoryRouter>
      <TeamList />
    </MemoryRouter>
  );

  screen.getByText('Loading teams.....');
  const team1 = await screen.findByText('Tala Loves Snacks');
  const teamLabel = await screen.findByRole('list', { name: 'teams' });

  expect(team1).toBeInTheDocument();
  expect(teamLabel).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
