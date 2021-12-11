import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { getPlayers } from '../../services/players';
import AddPlayer from './AddPlayer';

function PlayerList() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    getPlayers().then((resp) => setPlayers(resp));
  }, []);

  return (
    <>
      <NavLink
        to="/"
        className="home-link"
        exact
        style={{ display: 'flex', flexDirection: 'start' }}
      >
        Home
      </NavLink>
      <NavLink
        to="/teams"
        className="team-link"
        exact
        style={{ display: 'flex', flexDirection: 'start' }}
      >
        Teams
      </NavLink>
      <h1>List of Players:</h1>
      <NavLink
        to="/players/new"
        className="new-player-link"
        exact
        style={{ display: 'flex', flexDirection: 'column-reverse' }}
      >
        Add a Player
      </NavLink>
      <ul aria-label="players-list">
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
