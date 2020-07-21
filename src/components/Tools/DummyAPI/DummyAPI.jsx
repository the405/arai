import React from 'react';
import { Description } from '../common/Description'
import { descriptionData } from './descriptionData';
import './DummyAPI.scss';

const DummyAPI = ({ content }) => {
  return (
    <div className="api">
      <Description {...descriptionData} />
      {content}
    </div>
  );
}

export default DummyAPI;
