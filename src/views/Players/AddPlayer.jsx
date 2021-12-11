import { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import PlayerForm from '../../components/PlayerForm';
import { createPlayer } from '../../services/players';
import { getTeams } from '../../services/teams';

function AddPlayer() {
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
  });

  useEffect(() => {
    async function getSelectedTeam() {
      if (!selectedTeam) return;

      if (selectedTeam !== 'Please Select a Team') {
        setSelectedTeam(selectedTeam);
      }
    }
    getSelectedTeam();
  }, [selectedTeam]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const teamId = selectedTeam;
    const response = await createPlayer({ name, position, teamId });
    history.push(`/players/${response[0].id}`);
  };

  return (
    <>
      <h1>Add a Playa!</h1>
      <Link
        to="/teams"
        className="teams-link"
        exact
        style={{ display: 'flex', flexDirection: 'start' }}
      >
        Teams
      </Link>
      <Link
        to="/players"
        className="player-link"
        exact
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

export default AddPlayer;
