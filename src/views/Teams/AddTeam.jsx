import { useState } from 'react';
import { createTeam } from '../../services/teams';

function AddTeam() {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
  };

  createTeam({ name, city, state });

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
          onChange={({ target }) => {
            setName(target.value);
          }}
        />

        <label htmlFor="city">City:</label>
        <input
          type="text"
          name="city"
          id="city"
          value={city}
          onChange={({ target }) => {
            setCity(target.value);
          }}
        />

        <label htmlFor="state">State:</label>
        <input
          type="text"
          name="state"
          id="state"
          value={state}
          onChange={({ target }) => {
            setState(target.value);
          }}
        />

        <button type="submit">Add a Team</button>
      </form>
    </fieldset>
  );
}

export default AddTeam;
