import React from 'react';
import { DieContainer } from './DieContainer';
import { dieData } from './dieData';
import { Description } from '../common/Description'
import { descriptionData } from './descriptionData'
import './DiceRoll.scss';

const DiceRoll = () => (
  <div className="diceroll">
    <Description {...descriptionData} />
    <div className="dice--wrapper">
      {dieData.map(item => <DieContainer {...item} key={item.name} />)}
    </div>
  </div>
);

export { DiceRoll };
