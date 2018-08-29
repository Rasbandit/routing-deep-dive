import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Protected from './components/Protected';
import Info from './components/Info';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/login';
import NoMatch from './components/noMatch';
import Recursion from './components/Recursion';
import './App.css';

const App = props => (
  <Route
    className="content"
    render={({ location }) => (
      <div>
        <div className="links">
          <NavLink exact activeClassName="selected" to="/">
            Home
          </NavLink>
          <NavLink activeClassName="selected" to="/about">
            About
          </NavLink>
          <NavLink activeClassName="selected" to="/people">
            People
          </NavLink>
          <NavLink activeClassName="selected" to="/recursion/0">
            Recursion
          </NavLink>
          <NavLink activeClassName="selected" to="/Protected">
            Secret
          </NavLink>
        </div>
        <Switch location={location}>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/people" component={Info} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/protected" component={Protected} />
          <Route path="/recursion/:id" component={Recursion} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    )}
  />
);

export default App;
