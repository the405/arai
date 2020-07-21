import React from 'react';
import PropTypes from 'prop-types';
import './Link.scss';

const Link = ({
  href,
  label
}) => (
  <a className="highlight" href={href} rel="noopener noreferrer" target="_blank">
    {label}
  </a>
);

Link.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export { Link };
