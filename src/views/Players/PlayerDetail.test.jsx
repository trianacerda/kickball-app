import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PlayerDetail from './PlayerDetail';

it('should render a detailed view of an individual player by id ', async () => {
  const { container } = render(
    <MemoryRouter>
      <PlayerDetail match={{ params: { playerId: '1' } }} />
    </MemoryRouter>
  );

  screen.getByText('Please wait, your selected player is loading...');
  const playerName = await screen.findByText('Jonny Clutch');

  expect(playerName).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
