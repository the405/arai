import React from 'react';

import { NavLink } from 'react-router-dom';

import './Nav.scss';
import favicon from '../App/images/favicon.ico';

const Nav = () => (
  <nav className="nav">
    <ul id="navbar">
      <li className="nav-home">
        <NavLink
          activeClassName="active"
          to="/home"
        >
          Home
        </NavLink>
      </li>
      <li className="nav-tools">
        <NavLink
          activeClassName="active"
          to="/tools"
        >
          Tools
        </NavLink>
      </li>
      <li className="nav-about">
        <NavLink
          activeClassName="active"
          to="/about"
        >
          About
        </NavLink>
      </li>
    </ul>
  </nav>
);

export { Nav };
