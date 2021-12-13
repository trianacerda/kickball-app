import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getPlayerById } from '../../services/players';

function PlayerDetail({ match }) {
  const { playerId } = match.params;
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    getPlayerById(playerId).then((response) => setPlayer(response));
  }, [playerId]);

  if (!player) return <h1>Please wait, your selected player is loading...</h1>;

  return (
    <>
      <NavLink to="/" className="home-link" style={{ display: 'flex', flexDirection: 'start' }}>
        Home
      </NavLink>
      <NavLink
        to="/teams"
        className="team-link"
        style={{ display: 'flex', flexDirection: 'start' }}
      >
        Teams
      </NavLink>
      <NavLink
        to="/players"
        className="player-link"
        style={{ display: 'flex', flexDirection: 'start' }}
      >
        Players
      </NavLink>
      <h1>{player.name}</h1>
      <ul>
        <li>Position: {player.position}</li>
        <li>Team: {player.teams.name}</li>
        <li>
          From: {player.teams.city}, {player.teams.state}
        </li>
      </ul>
    </>
  );
}

export default PlayerDetail;
