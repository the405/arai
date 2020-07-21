import React, { useState } from 'react';
import { Bowling } from './Bowling';

const BowlingContainer = () => {
    const [score, setScore] = useState(0);

    const roll = (pins) => {
        return 0;
    }

    return <Bowling score={score}/>
}

export { BowlingContainer };
