import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { getPlayers } from '../../services/players';

function PlayerList() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    getPlayers().then((resp) => setPlayers(resp));
  }, []);

  return (
    <>
      <NavLink to="/" className="home-link" exact>
        Home
      </NavLink>
      <NavLink to="/teams" className="team-link" exact>
        Teams
      </NavLink>
      <h1>List of Players:</h1>
      <ul>
        {players.map((player) => {
          return (
            <li key={player.id}>
              <Link to={`/players/${player.id}`} className="player-list-link">
                {player.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default PlayerList;
