import React from 'react';
import { NavLink } from 'react-router-dom';
import { toolData } from '../Tools/toolData';
import './Sidebar.scss';

const Sidebar = ({ toggleNav, menuOpen, sidebar }) => {
  return (
    <div ref={sidebar} className={menuOpen ? 'visible sidebar sidebar--wrapper' : ' sidebar sidebar--wrapper'}>
      <div className="sidebar__links">
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
      </div>
      <button type="button" className={menuOpen ? 'visible sidebar__button' : 'sidebar__button'} onClick={toggleNav}>
        <i className="fas fa-chevron-right" />
      </button>
    </div>
  );
}

export { Sidebar };
