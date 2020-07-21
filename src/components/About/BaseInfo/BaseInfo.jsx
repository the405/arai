import React from 'react';
import portrait from './portrait.jpg';
import { baseData } from './baseData';
import { InfoEntry } from './InfoEntry';

const BaseInfo = () => (
    <div className="section section--baseinfo">
        <div className="baseinfo__portrait"><img src={portrait} alt="Portrait" /></div>
        <div className="baseinfo__info">
            <h1 className="baseinfo__name">Ahti Ruusuvuori</h1>
            <h3 className="baseinfo__title color-me">{'> Web developer'}</h3>
            <div className="baseinfo__links">
                {baseData.map(item => <InfoEntry {...item} />)}
            </div>
        </div>
    </div>
)

export { BaseInfo };
