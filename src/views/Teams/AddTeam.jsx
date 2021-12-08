import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createTeam } from '../../services/teams';

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
    <fieldset>
      <h1>Add a Team</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <label htmlFor="city">City:</label>
        <input
          type="text"
          name="city"
          id="city"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />

        <label htmlFor="state">State:</label>
        <input
          type="text"
          name="state"
          id="state"
          value={state}
          onChange={(e) => {
            setState(e.target.value);
          }}
        />

        <button type="submit">Add a Team</button>
      </form>
    </fieldset>
  );
}

export default AddTeam;
