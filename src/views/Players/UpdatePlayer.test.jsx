import { render, screen } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import UpdatePlayer from './UpdatePlayer';
import PlayerDetail from './PlayerDetail';

const mockPlayer = {
  created_at: '2021-12-12T21:16:29.0838+00:00',
  id: 29,
  name: 'T-Money',
  position: 'Big Kicker',
  team_id: 3,
  teams: {
    created_at: '2021-12-08T19:24:13+00:00',
    id: 3,
    name: "Luna's Looney Tunes",
    city: 'Happy',
    state: 'OR',
  },
};

const mockTeam = {
  created_at: '2021-12-08T19:24:13+00:00',
  id: 3,
  name: "Luna's Looney Tunes",
  city: 'Happy',
  state: 'OR',
  players: [],
};

const server = setupServer(
  rest.get('https://eyxqfyzkrrtcxhvkkviw.supabase.co/rest/v1/teams', (req, res, ctx) => {
    return res(ctx.json([mockTeam]));
  }),
  rest.get('https://eyxqfyzkrrtcxhvkkviw.supabase.co/rest/v1/players', (req, res, ctx) => {
    return res(ctx.json(mockPlayer));
  }),
  rest.patch('https://eyxqfyzkrrtcxhvkkviw.supabase.co/rest/v1/players', (req, res, ctx) => {
    return res(ctx.json([mockPlayer]));
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
  history.push('/players/29/update');

  const { container } = render(
    <MemoryRouter>
      <UpdatePlayer match={{ params: { playerId: '29' } }} />
      <PlayerDetail match={{ params: { playerId: '29' } }} />
    </MemoryRouter>
  );
  screen.getByText('Update a Playa!');

  const nameField = screen.getByLabelText(/Name:/i);
  const positionField = screen.getByLabelText(/Position:/i);
  const submitButton = screen.getByRole('button', { name: 'Submit' });

  userEvent.type(nameField, 'Billy');
  userEvent.type(positionField, 'BenchWarmer');
  userEvent.click(submitButton);

  expect(container).toMatchSnapshot();
  await screen.findByText(/T-Money/i);
});
