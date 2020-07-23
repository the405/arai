import React, { useState } from 'react';
import { Die } from './Die'

const DieContainer = ({ name, sides }) => {
  const [state, setState] = useState({
    result: '',
    count: 1,
    mode: 'default',
    modifier: 0
  });

  const handleClick = () => {
    let diceArray = [];
    let diceRoll = 0;
    let diceResult = 0;
    let rollCount = parseInt(state.count);
    if (rollCount === 1 && (state.mode === 'advantage' || state.mode === 'disadvantage')) {
      rollCount++;
    }
    for (let index = 0; index < rollCount; index++) {
      diceRoll = (Math.floor(Math.random() * sides) + 1 + parseInt(state.modifier));
      diceArray.push(diceRoll);
      diceResult += diceRoll;
    }
    if (state.mode === 'advantage') {
      diceResult -= diceArray.sort((a, b) => a - b)[0];
    } else if (state.mode === 'disadvantage') {
      diceResult -= diceArray.sort((a, b) => a - b)[diceArray.length - 1];
    }
    if (!state.modifier) diceResult += state.modifier;
    setState({ ...state, result: (diceResult + " (" + diceArray.sort((a, b) => a - b).join(' + ') + ")")});
  }

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  const handleModeChange = (e) => {
    setState({ ...state, mode: e.target.value });
  }

  return (
    <Die
      state={state}
      name={name}
      handleClick={handleClick}
      handleChange={handleChange}
      handleModeChange={handleModeChange}
    />
  );
}

export { DieContainer };
