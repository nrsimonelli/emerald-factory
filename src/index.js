import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { ThemeProvider } from './components/ThemeContext/ThemeContext';
import ThemeBackground from './components/ThemeBackground/ThemeBackground';

// import AOS from 'aos';
// import 'aos/dist/aos.css';

import App from './components/App/App';

ReactDOM.render(
  <ThemeProvider>
    <ThemeBackground>
      <App />
    </ThemeBackground>
  </ThemeProvider>,
  document.getElementById('root')
);
