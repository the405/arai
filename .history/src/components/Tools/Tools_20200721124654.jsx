import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { SidebarContainer } from '../Sidebar';
import { DiceRoll } from './DiceRoll';
import { DummyAPIContainer } from './DummyAPI';
import { ValidationContainer } from './Validation';
import { CipherContainer } from './Cipher';

import './Tools.scss';

const Tools = () => (
  <Router>
    <div className="tools">
      <aside>
        <SidebarContainer />
      </aside>
      <div className="tools--container">
        <Route exact path="/tools" component={DiceRoll} />
        <Route path="/tools/diceroll" component={DiceRoll} />
        <Route path="/tools/cipher" component={CipherContainer} />
        <Route path="/tools/validation" component={ValidationContainer} />
        <Route path="/tools/dummyapi" component={DummyAPIContainer} />
      </div>
    </div>
  </Router>
);

export { Tools };
