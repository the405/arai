import React from 'react';

import { Input } from '../../common/Input';
import { Button } from '../../common/Button';
import { Textarea } from '../../common/Textarea';
import { Description } from '../common/Description';
import { descriptionData } from './descriptionData';

import './Cipher.scss';

const Cipher = ({ handleClick, handleChange, keyValue, textValue }) => {
  return (
    <div className="cipher">
      <Description {...descriptionData} />
      <div className="cipher__input">
        <Input
          className="input cipher__key"
          value={keyValue}
          type="number"
          name="key"
          handleChange={(e) => handleChange(e)}
          placeholder="Key"
        />
        <Textarea
          className="textarea cipher__text"
          value={textValue}
          name="text"
          handleChange={(e) => handleChange(e)}
          placeholder="Text"
        />
      </div>
      <div className="cipher__buttongroup">
        <Button
          label="Encrypt"
          handleClick={() => handleClick(false)}
          className="button cipher__encrypt"
        />
        <Button
          label="Decrypt"
          handleClick={() => handleClick(true)}
          className="button cipher__decrypt"
        />
      </div>
    </div>
  );
}

export { Cipher };
