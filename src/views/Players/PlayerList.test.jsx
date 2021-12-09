import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import PlayerList from './PlayerList';

it('should render a list of players', async () => {
  const { container } = render(
    <MemoryRouter>
      <PlayerList />
    </MemoryRouter>
  );

  const team1 = await screen.findByText('Bella Boo');
  const team2 = await screen.findByText('Jonny Clutch');
  const playerLabel = await screen.findByRole('list', { name: 'players-list' });

  expect(team1).toBeInTheDocument();
  expect(team2).toBeInTheDocument();
  expect(playerLabel).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
