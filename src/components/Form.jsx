function Form({ name, setName, submitHandler, state, setState, city, setCity }) {
  return (
    <fieldset>
      <form onSubmit={submitHandler}>
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

        <button type="submit">Submit</button>
      </form>
    </fieldset>
  );
}

export default Form;
