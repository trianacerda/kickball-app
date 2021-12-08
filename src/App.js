import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import './App.css';
import TeamDetail from './views/Teams/TeamDetail';
import TeamList from './views/Teams/TeamList';
import Home from './views/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          Kickball Y'all
          <NavLink to="/" className="home-link" exact>
            Home
          </NavLink>
          <NavLink to="/" className="teams-link">
            Teams
          </NavLink>
        </header>
        <Switch>
          <Route
            path="/teams/:teamId"
            render={(routerProps) => <TeamDetail label="Team Details Label" {...routerProps} />}
          />
          <Route path="/teams" component={TeamList} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
