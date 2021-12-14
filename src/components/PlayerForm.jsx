function PlayerForm({
  name,
  setName,
  position,
  setPosition,
  teams,
  selectedTeam,
  submitHandler,
  teamChange,
}) {
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
        <label htmlFor="position">Position:</label>
        <input
          id="position"
          type="text"
          name="position"
          position="position"
          value={position}
          onChange={(e) => {
            setPosition(e.target.value);
          }}
        />
        <select
          value={selectedTeam}
          onChange={(e) => {
            teamChange(e.target.value);
          }}
        >
          <option key="select-team" value="select-team">
            Please Select a Team
          </option>
          {teams.map((team) => {
            return (
              <option key={team.id} value={team.id}>
                {team.name}
              </option>
            );
          })}
        </select>

        <button type="submit">Submit</button>
      </form>
    </fieldset>
  );
}

export default PlayerForm;
