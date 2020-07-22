import React from 'react';
import styled from 'styled-components';
import { Burger } from './Burger';

const Nav = styled.div`
  height: 55px;
  border-bottom: 1px solid ${({ theme }) => theme.primary};
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
  }
  @media (max-width: 768px) {
    border: none;
  }
`

const Toolbar = () => {
  return (
    <Nav>
      <Burger />
    </Nav>
  )
}

export { Toolbar };
