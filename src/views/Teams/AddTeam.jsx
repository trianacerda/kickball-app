import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { createTeam } from '../../services/teams';
import Form from '../../components/Form';

function AddTeam() {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await createTeam({ name, city, state });
    history.push(`/teams/${response[0].id}`);
  };

  return (
    <>
      <h1>Add a New Team!</h1>
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

export default AddTeam;
