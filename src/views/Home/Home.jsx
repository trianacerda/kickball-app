import { NavLink } from 'react-router-dom';
import React from 'react';

function Home() {
  return (
    <>
      <NavLink to="/teams" className="teams-link" exact>
        Teams
      </NavLink>
      <NavLink to="/players" className="player-link" exact>
        Players
      </NavLink>
      <h1>Hi from the home page!!!!!</h1>
    </>
  );
}

export default Home;
