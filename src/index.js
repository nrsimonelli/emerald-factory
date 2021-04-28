import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { ThemeProvider } from './components/ThemeContext/ThemeContext';
import ThemeBackground from './components/ThemeBackground/ThemeBackground';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import rootReducer from './redux/reducers';
import rootSaga from './redux/sagas';

// import AOS from 'aos';
// import 'aos/dist/aos.css';

import App from './components/App/App';

const sagaMidleware = createSagaMiddleware();
const middlewareList =
  process.env.NODE_ENV === 'development'
    ? [sagaMidleware, logger]
    : [sagaMidleware];

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewareList)
);

sagaMidleware.run(rootSaga);

ReactDOM.render(
  <ThemeProvider>
    <ThemeBackground>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeBackground>
  </ThemeProvider>,
  document.getElementById('react-root')
);
