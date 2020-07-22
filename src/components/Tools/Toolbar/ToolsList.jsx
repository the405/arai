import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { toolData } from '../toolData';

const Ul = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-flow: row nowrap;
  margin: 0;
  padding: 0;
  a {
    padding: 18px 10px;
    text-transform: uppercase;
    color: 1px solid ${({ theme }) => theme.textColorDark};
  }
  @media (max-width: 768px) {
    background-color: ${({ theme }) => theme.background};
    justify-content: flex-start;
    flex-flow: column nowrap;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    padding-left: 1em;
    transition: transform 0.3s ease-in-out;
    a {
      color: #fff;
    }
  }
`;

const ToolsList = ({ open }) => {
  return (
    <Ul open={open}>
      {toolData.map(item => (
        <NavLink
          activeClassName={item.activeClassName}
          className={item.iconClass}
          to={item.to}
          key={item.to}
        >
          {item.name}
        </NavLink>
      ))}
    </Ul>
  );
}

export { ToolsList };
