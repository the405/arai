import React, { useState } from 'react';
import { CharSheet } from './CharSheet';
import { charData } from './charData';
import './CharSheet.scss';

const CharSheetContainer = () => {
  const [character, setCharacterValues] = useState(charData);

  const updateValue = e => {
    setCharacterValues({ ...character, [e.target.name]: e.target.value });
  };

  return (
    <CharSheet character={character} updateValue={updateValue}/>
  );
}

export { CharSheetContainer };
