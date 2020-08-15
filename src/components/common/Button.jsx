import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  margin: 3px;
  background-color: rgb(190, 142, 89);
  border: none;
  color: white;
  cursor: pointer;
  justify-content: center;
  padding-bottom: calc(.375em - 1px);
  padding-left: .75em;
  padding-right: .75em;
  padding-top: calc(.375em - 1px);
  text-align: center;
  white-space: nowrap;
  outline: none;
  font-size: 1rem;
  border-radius: 4px;
  height: 2.25em;
  width: auto;
  justify-content: flex-start;
  line-height: 1.5;
  padding-bottom: calc(.375em - 1px);
  padding-left: calc(.625em - 1px);
  padding-right: calc(.625em - 1px);
  padding-top: calc(.375em - 1px);
  transition: all 0.1s ease-in-out;

  &:active {
      margin: 0;
      opacity: 1;
      transform: scale(0.96);
      transition: all 0.05s ease-in-out;
  }
`

const Button = ({
  label,
  handleClick,
  className,
  disabled,
}) => (
  <StyledButton
    disabled={disabled}
    type="submit"
    onClick={e => handleClick(e, label)}
    className={className}
    value={label}
  >
    {label}
  </StyledButton>
);

Button.defaultProps = {
  className: 'button',
  disabled: false,
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
};

export { Button };
