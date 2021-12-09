import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import TeamDetail from './TeamDetail';

it('should render a detailed view of an individual team by id', async () => {
  const { container } = render(
    <MemoryRouter>
      <TeamDetail match={{ params: { teamId: '1' } }} />
    </MemoryRouter>
  );

  screen.getByText('Please wait, the team is loading...');
  const teamName = await screen.findByText('Tala Loves Snacks', { name: 'team-name' });

  expect(teamName).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
