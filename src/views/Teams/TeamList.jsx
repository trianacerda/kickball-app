import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteTeamById, getTeams } from '../../services/teams';

function TeamList() {
  const [loading, setLoading] = useState(true);
  const [teams, setTeams] = useState([]);

  const loadTeams = async () => {
    setLoading(true);
    const resp = await getTeams();
    setTeams(resp);
    setLoading(false);
  };

  useEffect(() => {
    loadTeams();
  }, []);

  const handleDelete = async ({ id, name }) => {
    const shouldDelete = confirm(`Are you sure you wanna delete ${name}??`);

    if (shouldDelete) {
      await deleteTeamById(id);
      await loadTeams();
    }
  };

  if (loading) return <h1>Loading teams.....</h1>;

  return (
    <>
      <Link to="/" className="home-link" style={{ display: 'flex', flexDirection: 'start' }}>
        Home
      </Link>
      <Link
        to="/players"
        className="player-link"
        style={{ display: 'flex', flexDirection: 'start' }}
      >
        Players
      </Link>
      <Link
        to="/teams/new"
        className="new-team-link"
        style={{ display: 'flex', flexDirection: 'start' }}
      >
        Add a New Team
      </Link>

      <h1>List of Teams:</h1>
      <ul aria-label="teams">
        {teams.map((team) => {
          return (
            <li key={team.id}>
              <Link to={`/teams/${team.id}`} className="team-list-link" name={team.name}>
                {team.name}
              </Link>
              <Link
                to={`/teams/${team.id}/update`}
                className="update-team-link"
                style={{ display: 'flex', flexDirection: 'column-reverse' }}
              >
                Update Team
              </Link>
              <button
                aria-label={`Delete${team.name}`}
                type="button"
                value="delete"
                onClick={() => {
                  handleDelete({ id: team.id, name: team.name });
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default TeamList;
