import React from 'react';
import PropTypes from 'prop-types';
import './Link.scss';

const Jumbolink = ({
  href,
  label
}) => (
  <a className="highlight" href={href} rel="noopener noreferrer" target="_blank">
    {label}
  </a>
);

Jumbolink.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export { Link };
