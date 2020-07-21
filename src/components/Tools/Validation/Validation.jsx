import React from 'react';

import { Description } from '../common/Description';
import { descriptionData } from './descriptionData';

import './Validation.scss';

const Validation = ({ validation, handleClick }) => {
  return (
    <div className="validation">
      <Description {...descriptionData} />
      <button
        onClick={() => handleClick()}
        className="button validation__button"
      >Validate me!</button>
      <h1>{validation}</h1>
    </div>
  );
}

export { Validation };
