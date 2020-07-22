import React from 'react';
import styled from 'styled-components'
import { Burger } from './Burger';

const Nav = styled.nav`
  border-bottom: 1px solid ${({ theme }) => theme.primary};
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const Toolbar = () => {
  return (
    <Nav>
      <Burger />
    </Nav>
  )
}

export { Toolbar };
