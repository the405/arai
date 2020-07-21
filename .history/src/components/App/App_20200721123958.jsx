import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Components
import { Nav } from '../Nav';
import { Home } from '../Home';
import { Tools } from '../Tools';
import { About } from '../About';

// Styles
import './App.scss';

const App = () => {
  return (
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
  );
}

export { App };
