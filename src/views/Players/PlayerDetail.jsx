import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getPlayerById } from '../../services/players';

function PlayerDetail({ label, match }) {
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
      <h1>{label}</h1>

      <h1>{player.name}</h1>
      <p>
        Position {player.position}, {player.teams.name}
      </p>
      <p>
        From {player.city}, {player.state}
      </p>
    </>
  );
}

export default PlayerDetail;
