import { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { updatePlayerById } from '../../services/players';
import PlayerForm from '../../components/PlayerForm';
import { getTeams } from '../../services/teams';

function UpdatePlayer({ match }) {
  const { playerId } = match.params;
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [selectedTeam, setSelectedTeam] = useState('');
  const [teams, setTeams] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function getAllTeams() {
      const fetchTeams = await getTeams();
      setTeams(fetchTeams);
    }
    getAllTeams();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await updatePlayerById(playerId, { name, position });
    history.push(`/players/${response[0].id}`);
  };

  return (
    <>
      <h1>Update a Playa!</h1>
      <Link to="/" className="home-link" style={{ display: 'flex', flexDirection: 'start' }}>
        Home
      </Link>
      <Link to="/teams" className="teams-link" style={{ display: 'flex', flexDirection: 'start' }}>
        Teams
      </Link>
      <Link
        to="/players"
        className="player-link"
        style={{ display: 'flex', flexDirection: 'start' }}
      >
        Players
      </Link>
      <PlayerForm
        name={name}
        position={position}
        submitHandler={onSubmit}
        setName={setName}
        setPosition={setPosition}
        teamChange={setSelectedTeam}
        selectedTeam={selectedTeam}
        teams={teams}
      />
    </>
  );
}

export default UpdatePlayer;
