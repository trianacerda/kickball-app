import { render, screen } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import AddTeam from './AddTeam';
import TeamDetail from './TeamDetail';

const mockTeam = {
  id: 9,
  created_at: '2021-12-11T02:56:49.810681+00:00',
  name: 'The couch sitters',
  city: 'sisters',
  state: 'Oregon',
  players: [],
};

const server = setupServer(
  rest.get('https://eyxqfyzkrrtcxhvkkviw.supabase.co/rest/v1/teams', (req, res, ctx) => {
    return res(ctx.json(mockTeam));
  }),
  rest.post('https://eyxqfyzkrrtcxhvkkviw.supabase.co/rest/v1/teams', (req, res, ctx) => {
    return res(ctx.json([mockTeam]));
  })
);

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});

it('should render Form component and redirect to details apart after submit', async () => {
  const history = createMemoryHistory();
  history.push('/teams/new');

  const { container } = render(
    <MemoryRouter>
      <AddTeam />
      <TeamDetail match={{ params: { teamId: 9 } }} />
    </MemoryRouter>
  );

  screen.getByText('Add a New Team!');

  const nameField = screen.getByLabelText(/Name:/i);
  const cityField = screen.getByLabelText(/City:/i);
  const stateField = screen.getByLabelText(/State:/i);
  const submitButton = screen.getByRole('button', { name: 'Submit' });

  userEvent.type(nameField, 'The couch sitters');
  userEvent.type(cityField, 'sisters');
  userEvent.type(stateField, 'Oregon');
  userEvent.click(submitButton);

  expect(container).toMatchSnapshot();
  await screen.findByText(/sisters/i);
});
