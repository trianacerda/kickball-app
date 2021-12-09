import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getPlayerById } from '../../services/players';

function PlayerDetail({ match }) {
  const { playerId } = match.params;
  const [player, setPlayer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPlayerById(playerId)
      .then((resp) => setPlayer(resp))
      .finally(() => setLoading(false));
  }, [playerId]);

  if (loading) return <h1>Please wait, your selected Player is loading...</h1>;

  return (
    <>
      <NavLink to="/" className="home-link" exact>
        Home
      </NavLink>
      <NavLink to="/teams" className="team-link" exact>
        Teams
      </NavLink>
      <NavLink to="/players" className="player-link" exact>
        Players
      </NavLink>
      <h1>{player.name}</h1>
      <ul>
        <li>Position: {player.position}</li>
        <li>Team: {player.teams.name}</li>
        <li>
          From: {player.city}, {player.state}
        </li>
      </ul>
    </>
  );
}

export default PlayerDetail;
