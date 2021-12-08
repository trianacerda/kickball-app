import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { getTeams } from '../../services/teams';

function TeamList() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    getTeams().then((resp) => setTeams(resp));
  }, []);

  return (
    <>
      <NavLink to="/" className="home-link" exact>
        Home
      </NavLink>
      <NavLink to="/players" className="player-link" exact>
        Players
      </NavLink>

      <h1>List of Teams:</h1>
      <ul>
        {teams.map((team) => {
          return (
            <li key={team.id}>
              <Link to={`/teams/${team.id}`} className="team-list-link">
                {team.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default TeamList;
