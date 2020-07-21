import React from 'react';
import { Description } from '../common/Description';
import { descriptionData } from './descriptionData';
import './Bowling.scss';

const Bowling = ({ score }) => {
    const renderScore = () => {
        return score.map(round => <span key={round.id}>{round.score}</span>)
    }

    return (
        <div className="bowling">
            <Description {...descriptionData} />
            <div className="score">
                {renderScore()}
            </div>
        </div>
    );
}

export { Bowling };
