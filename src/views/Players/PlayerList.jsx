import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { getPlayers, deletePlayerById } from '../../services/players';
import AddPlayer from './AddPlayer';

function PlayerList() {
  const [loading, setLoading] = useState(true);
  const [players, setPlayers] = useState([]);

  const loadPlayers = async () => {
    setLoading(true);
    const resp = await getPlayers();
    setPlayers(resp);
    setLoading(false);
  };
  useEffect(() => {
    loadPlayers();
  }, []);

  const handleDelete = async ({ id }) => {
    const shouldDelete = confirm(`Are you sure you wanna delete ${name}??`);

    if (shouldDelete) {
      await deletePlayerById(id);
      await loadPlayers();
    }
  };

  if (loading) return <h1>Loading players.....</h1>;

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
            <div key={player.id} style={{ border: 'solid', borderColor: 'lightseagreen' }}>
              <li key={player.id}>
                <Link to={`/players/${player.id}`} className="player-list-link">
                  {player.name}
                </Link>
                <NavLink
                  to={`/players/${player.id}/update`}
                  className="update-player-link"
                  exact
                  style={{ display: 'flex', flexDirection: 'column-reverse', margin: '15px' }}
                >
                  Update Player
                </NavLink>
                <button
                  aria-label={`Delete${player.name}`}
                  type="button"
                  value="delete"
                  onClick={() => {
                    handleDelete({ id: player.id, name: player.name });
                  }}
                >
                  Delete
                </button>
              </li>
            </div>
          );
        })}
      </ul>
    </>
  );
}

export default PlayerList;
