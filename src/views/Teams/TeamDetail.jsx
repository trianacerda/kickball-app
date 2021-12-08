import { NavLink, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getTeamById } from '../../services/teams';

function TeamDetail({ label, match }) {
  const { teamId } = match.params;
  const [team, setTeam] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTeamById(teamId)
      .then((resp) => setTeam(resp))
      .finally(() => setLoading(false));
  }, [teamId]);

  if (loading) return <h1>Please wait, the team is loading...</h1>;

  return (
    <>
      <h1>{label}</h1>
      <NavLink to="/" className="home-link" exact>
        Home
      </NavLink>
      <NavLink to="/teams" className="team-link" exact>
        Teams
      </NavLink>
      <p>
        <Link to="/teams" className="team-link">
          Back to Team Page
        </Link>
      </p>
      <h1>{team.name}</h1>
      <p>
        From {team.city}, {team.state}
      </p>
      <ul>
        {team.players.map((player) => {
          return (
            <li key={player.id}>
              Position: {player.position} - Name:{player.name}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default TeamDetail;
