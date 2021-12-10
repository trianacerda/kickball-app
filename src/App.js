import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import './App.css';
import TeamDetail from './views/Teams/TeamDetail';
import TeamList from './views/Teams/TeamList';
import Home from './views/Home/Home';
import PlayerList from './views/Players/PlayerList';
import PlayerDetail from './views/Players/PlayerDetail';
import AddTeam from './views/Teams/AddTeam';
import UpdateTeam from './views/Teams/UpdateTeam';

function App() {
  return (
    <div className="App">
      <Router>
        <header>Kickball Y'all</header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/teams" component={TeamList} />
          <Route exact path="/teams/new" component={AddTeam} />
          <Route exact path="/teams/:teamId" component={TeamDetail} />
          <Route exact path="/teams/:teamId/update" component={UpdateTeam} />
          <Route exact path="/players" component={PlayerList} />
          <Route exact path="/players/:playerId" component={PlayerDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
