import { NavLink, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getTeamById } from '../../services/teams';

function TeamDetail({ match }) {
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
      <p>
        <Link to="/" className="home-link">
          Home
        </Link>
      </p>
      <p>
        <Link to="/teams" className="team-link">
          Teams
        </Link>
      </p>

      <h1 name="team-name">{team.name}</h1>
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
