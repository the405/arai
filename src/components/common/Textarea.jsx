import React from 'react';
import PropTypes from 'prop-types';
import './Textarea.scss';

const Textarea = ({
  name,
  className,
  handleChange,
  value,
  placeholder,
}) => (
  <textarea
    value={value}
    className={className}
    name={name}
    onChange={e => handleChange(e)}
    placeholder={placeholder}
  />
);

Textarea.defaultProps = {
  value: '',
  className: 'textarea',
  placeholder: '',
};

Textarea.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

export { Textarea };
