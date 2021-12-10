import { Link } from 'react-router-dom';
import React from 'react';

function Home() {
  return (
    <>
      <Link to="/teams" className="teams-link" exact>
        Teams
      </Link>
      <Link to="/players" className="player-link" exact>
        Players
      </Link>
      <h1>Hi from the home page!!!!!</h1>
    </>
  );
}

export default Home;
