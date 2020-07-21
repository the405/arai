import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';

// Components
import { Nav } from '../Nav';
import { Home } from '../Home';
import { Tools } from '../Tools';
import { About } from '../About';

// Styles
import './App.scss';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Router>
          <div className="App">
            <Nav />
            <main>
              <Route exact path="/" component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/tools" component={Tools} />
              <Route path="/about" component={About} />
            </main>
          </div>
        </Router>
      </>
    </ThemeProvider>
  );
}

export { App };
