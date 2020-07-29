import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '../../common/Button';
import { Input } from '../../common/Input';

const Die = ({ name, state, handleClick, handleChange, handleModeChange }) => {
  const renderModes = () => {
    const modes = ['default', 'advantage', 'disadvantage'];
    const modeElems = [];
    for (let index = 0; index < modes.length; index++) {
      modeElems.push(
        <div className={'mode mode--'+modes[index]} key={index}>
          <input type="radio"
            id={modes[index]+'--'+name}
            name={name}
            onChange={handleModeChange}
            value={modes[index]}
            checked={state.mode===modes[index]}
          />
          <label htmlFor={modes[index]+'--'+name}>{modes[index]}</label>
        </div>
      );
    }
    return modeElems;
  }

  const renderContent = () => {
    return (
      <div className="die--container">
        <div className="modes">
          {renderModes()}
        </div>
        <div className="die">
          <Input
            className="input die__count"
            value={state.count.toString()}
            type="text"
            name="count"
            handleChange={handleChange}
            placeholder="1"
          />
          <FontAwesomeIcon icon="times" />
          <Button
            label={name}
            handleClick={handleClick}
            className="button die__sides"
          />
          <FontAwesomeIcon icon="plus" />
          <Input
            className="input die__modifier"
            value={state.modifier}
            type="number"
            name="modifier"
            handleChange={handleChange}
            placeholder="0"
          />
          <div className="color-me die__result">{'= ' + state.result}</div>
        </div>
      </div>
    );
  }

  return renderContent();
}

export { Die };
