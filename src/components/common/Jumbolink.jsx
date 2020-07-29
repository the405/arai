import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const StyledJumbo = styled.div`
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3em 0;

    &:hover {
        color: #555555 !important;
        transition: all 0.2s ease-in-out;
    }
`

const Jumbolink = ({
  icon,
  label,
  subLabel,
}) => (
    <StyledJumbo>
      <FontAwesomeIcon icon={icon} size="6x" />
      <span className="jumbolink__label">{label}</span>
      <span className="jumbolink__sublabel">{subLabel}</span>
    </StyledJumbo>
);

Jumbolink.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export { Jumbolink };
