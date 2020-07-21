import React from 'react';
import { Description } from '../common/Description';
import { descriptionData } from './descriptionData';
import { charData } from './charData';

import './CharSheet.scss';

const CharSheet = ({ character, updateValue }) => {
  const createCharStats = () => {
    let baseStats = [];
    for (let key in charData) {
      baseStats.push(<input type="text" key={key} name={key} value={character[key]} onChange={updateValue}/>)
    }
    return baseStats;
  }

  return (
    <div className="cipher">
      <Description {...descriptionData} />
      {createCharStats()}
    </div>
  );
}

export { CharSheet };
