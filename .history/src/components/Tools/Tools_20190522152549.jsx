import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { SidebarContainer } from '../Sidebar';
import { DiceRoll } from './DiceRoll';
import { CharSheetContainer } from './CharSheet';
import { DummyAPIContainer } from './DummyAPI';
import { ValidationContainer } from './Validation';
import { KMeansContainer } from './KMeans';
import { CipherContainer } from './Cipher';
import { BowlingContainer } from './Bowling';

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
        <Route path="/tools/charsheet" component={CharSheetContainer} />
        <Route path="/tools/cipher" component={CipherContainer} />
        <Route path="/tools/validation" component={ValidationContainer} />
        <Route path="/tools/kmeans" component={KMeansContainer} />
        <Route path="/tools/dummyapi" component={DummyAPIContainer} />
        <Route path="/tools/bowling" component={BowlingContainer} />
      </div>
    </div>
  </Router>
);

export { Tools };
