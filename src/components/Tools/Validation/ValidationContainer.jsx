import React, { useState } from 'react';

import { Validation } from './Validation';
import { adjectives } from './adjectives';
import { adverbs } from './adverbs';

import './Validation.scss';

const ValidationContainer = () => {
  const [validation, setValidation] = useState('');

  const handleClick = () => {
    const adverb = adverbs[Math.floor(Math.random() * adverbs.length)];
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    setValidation(`You are ${adverb} ${adjective}!`);
  }

  return (
    <Validation validation={validation} handleClick={handleClick} />
  );
}

export { ValidationContainer };
