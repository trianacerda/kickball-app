import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTeams } from '../../services/teams';

function TeamList() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    getTeams().then((resp) => setTeams(resp));
  }, []);

  return (
    <>
      <Link to="/" className="home-link" exact>
        Home
      </Link>
      <Link to="/players" className="player-link" exact>
        Players
      </Link>
      <Link to="/teams/new" className="new-team-link" exact>
        Add a New Team
      </Link>

      <h1>List of Teams:</h1>
      <ul>
        {teams.map((team) => {
          console.log('teams', teams);
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
