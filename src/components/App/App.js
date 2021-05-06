import React from 'react';

import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Tournament from '../Tournament/Tournament';
import Home from '../Home/Home';
import Profile from '../Profile/Profile';
import Dashboard from '../Dashboard/Dashboard';
import EventDetails from '../Info/EventDetails';
import GameDetails from '../Info/GameDetails';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path='/tournament/:name/game/:id'
          exact
          component={GameDetails}
        />
        <Route
          path='/tournament/:name'
          exact
          component={EventDetails}
        />
        <Route path='/tournament' exact component={Tournament} />
        <Route path='/profile' exact component={Profile} />
        <Route path='/dashboard' exact component={Dashboard} />
        <Route path='/' exact component={Home} />
        <Redirect from='*' to='/' />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
