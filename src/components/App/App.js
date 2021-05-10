import React, { useEffect } from 'react';

import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Event from '../Event/Event';
import Game from '../Game/Game';
import Hero from '../Hero/Hero';
import Leader from '../Leader/Leader';
import Player from '../Player/Player';
import Profile from '../Profile/Profile';
import Tournament from '../Tournament/Tournament';

import 'aos/dist/aos.css';
import AOS from 'aos';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/events/:name/game/:id' exact component={Game} />
        <Route path='/events/:name' exact component={Event} />
        <Route path='/events' exact component={Tournament} />
        <Route path='/players/:name' exact component={Player} />
        <Route path='/players' exact component={Leader} />
        <Route path='/profile' exact component={Profile} />
        <Route path='/' exact component={Hero} />
        <Redirect from='*' to='/' />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
