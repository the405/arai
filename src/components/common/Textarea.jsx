import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTextarea = styled.textarea`
  background-color: #fff;
  color: #363636;
  border-color: hsl(0,0%,80%);
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  outline: none;
  font-size: 16px;
  min-width: 200px;
  min-height: 40px;
  justify-content: flex-start;
  line-height: 1.5;
  padding: 0 5px;
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
`

const Textarea = ({
  name,
  className,
  handleChange,
  value,
  placeholder,
}) => (
  <StyledTextarea
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
