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
                {/* <span className="phone">
                    <i className="fas fa-mobile fa-fw color-me" />
                    {' (+358) 44 529 3577'}
                </span>
                <span className="email">
                    <a href="mailto:ahti.ruusuvuori@gmail.com">
                        <i className="fas fa-envelope fa-fw color-me" />
                        {' ahti.ruusuvuori@gmail.com'}
                    </a>
                </span>
                <span className="github">
                    <a href="https://github.com/the405" rel="noopener noreferrer" target="_blank">
                        <i className="fab fa-github fa-fw color-me" />
                        {' the405'}
                    </a>
                </span>
                <span className="linkedin">
                    <a href="https://www.linkedin.com/in/ahtiruusuvuori/" rel="noopener noreferrer" target="_blank">
                        <i className="fab fa-linkedin fa-fw color-me" />
                        {' ahtiruusuvuori'}
                    </a>
                </span> */}
            </div>
        </div>
    </div>
)

export { BaseInfo };