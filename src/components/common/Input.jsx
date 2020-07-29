import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInput = styled.input`
    background-color: #fff;
    color: #363636;
    border-color: hsl(0,0%,80%);
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
    outline: none;
    font-size: 1rem;
    width: 4em;
    min-height: 38px;
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

const Input = ({
  type,
  name,
  id,
  checked,
  className,
  handleChange,
  value,
  placeholder,
}) => (
  <StyledInput
    value={value}
    className={className}
    type={type}
    name={name}
    id={id}
    checked={checked}
    onChange={e => handleChange(e)}
    placeholder={placeholder}
  />
);

Input.defaultProps = {
  value: '',
  className: 'input',
  placeholder: '',
};

Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

export { Input };
