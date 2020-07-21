import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InfoEntry = ({ className, icon, value }) => (
    <span className={className}>
        <FontAwesomeIcon icon={icon} />
        {` ${value}`}
    </span>
)

export { InfoEntry };
