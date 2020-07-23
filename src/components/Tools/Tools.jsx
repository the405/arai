import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Toolbar } from './Toolbar';
import { DiceRoll } from './DiceRoll';
import { DummyAPIContainer } from './DummyAPI';
import { ValidationContainer } from './Validation';
import { CipherContainer } from './Cipher';
import { CowList } from './CowList';

const ToolsContainer = styled.div`
  color: ${({ theme }) => theme.textColorDark};
  margin: 1em;
`;

const Tools = () => (
  <Router>
    <Toolbar />
    <ToolsContainer className="tools--container">
      <Route exact path="/tools" component={DiceRoll} />
      <Route path="/tools/diceroll" component={DiceRoll} />
      <Route path="/tools/cipher" component={CipherContainer} />
      <Route path="/tools/validation" component={ValidationContainer} />
      <Route path="/tools/dummyapi" component={DummyAPIContainer} />
      <Route path="/tools/cowlist" component={CowList} />
    </ToolsContainer>
  </Router>
);

export { Tools };
