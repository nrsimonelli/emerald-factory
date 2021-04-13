import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { ThemeProvider } from './components/ThemeContext/ThemeContext';
import ThemeBackground from './components/ThemeBackground/ThemeBackground';

// import AOS from 'aos';
// import 'aos/dist/aos.css';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Tournament from './components/Tournament/Tournament';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';

ReactDOM.render(
  <ThemeProvider>
    <ThemeBackground>
      <BrowserRouter>
        <Switch>
          <Route path='/tournament' component={Tournament} />
          <Route path='/profile' exact component={Profile} />
          <Route path='/' exact component={Home} />
          <Redirect from='*' to='/' />
        </Switch>
      </BrowserRouter>
    </ThemeBackground>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
