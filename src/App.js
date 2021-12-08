import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import './App.css';
import TeamDetail from './views/Teams/TeamDetail';
import TeamList from './views/Teams/TeamList';
import Home from './views/Home/Home';
import PlayerList from './views/Players/PlayerList';
import PlayerDetail from './views/Players/PlayerDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <header>Kickball Y'all</header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/teams" component={TeamList} />
          <Route path="/teams/:teamId" component={TeamDetail} />
          <Route path="/players" component={PlayerList} />
          <Route path="/players/:playerId" component={PlayerDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
