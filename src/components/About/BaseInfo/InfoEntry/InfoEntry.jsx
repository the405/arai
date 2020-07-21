import React from 'react';

const InfoEntry = ({ className, icon, value }) => (
    <span className={className}>
        <i className={`fas ${icon} fa-fw color-me`} />
        {` ${value}`}
    </span>
)

export { InfoEntry };