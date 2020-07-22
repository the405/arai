import React from 'react';
import styled from 'styled-components'
import { Burger } from './Burger';

const Nav = styled.nav`
  border-bottom: 1px solid ${({ theme }) => theme.primary};
  height: 50px;
  display: flex;
  justify-content: space-around;
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
