import React from 'react';
import './JumboLinks.scss';
import { NavLink } from 'react-router-dom';
import { Jumbolink } from '../common/Jumbolink';

const JumboLinks = () => (
  <div className="jumbolinks mb-5">
    <NavLink to="/tools">
      <Jumbolink icon="wrench" label="Check the tools" subLabel="They're cool" key="1" />
    </NavLink>
    <NavLink to="/about">
      <Jumbolink icon="copyright" label="Who am I" subLabel="A sad nerd" key="2" />
    </NavLink>
  </div>
);

export { JumboLinks };
