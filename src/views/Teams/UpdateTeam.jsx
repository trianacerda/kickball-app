import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { updateTeamById } from '../../services/teams';
import Form from '../../components/Form';

function UpdateTeam({ match }) {
  const { teamId } = match.params;
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await updateTeamById(teamId, { name, city, state });
    history.push(`/teams/${response[0].id}`);
  };

  return (
    <>
      <h1>Update a Team!</h1>
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
      <Form
        name={name}
        city={city}
        state={state}
        submitHandler={onSubmit}
        setName={setName}
        setCity={setCity}
        setState={setState}
      />
    </>
  );
}

export default UpdateTeam;
