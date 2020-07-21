import React from 'react';
import PropTypes from 'prop-types';
import './Jumbolink.scss';

const Jumbolink = ({
  icon,
  label,
  subLabel,
}) => (
    <div className="jumbolink d-flex flex-column align-items-center">
      <i className={`fas fa-${icon} color-me`} />
      <span className="jumbolink__label">{label}</span>
      <span className="jumbolink__sublabel">{subLabel}</span>
    </div>
);

Jumbolink.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export { Jumbolink };
