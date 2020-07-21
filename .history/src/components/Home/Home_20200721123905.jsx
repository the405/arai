import React from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';

import { NavLink } from 'react-router-dom';

import { KonamiCode } from '../Tools/KonamiCode';
import { Link } from '../common/Link';
import { Jumbolink } from '../common/Jumbolink';
import './Home.scss';

const Home = () => (
  <div className="home">
    <div className="home__container d-flex flex-column justify-content-around">

      {/* Could make a component out of this */}
      <div className="home__title">
        <h1>arai#2077</h1>
        <h2>wake the <span className="highlight">ファック</span> up, samurai</h2>
      </div>

      {/* and this */}
      <div className="home__content">
        {/* and this */}
        <div className="home__links mb-5 d-flex justify-content-around">
          <NavLink to="/tools">
            <Jumbolink icon="wrench" label="Check the tools" subLabel="They're cool" key="1" />
          </NavLink>
          <NavLink to="/about">
            <Jumbolink icon="copyright" label="Who am I" subLabel="A sad nerd" key="2" />
          </NavLink>
        </div>

        {/* and this */}
        <div className="home__about">
          <p>This website has been created with <Link key="1" href="https://reactjs.org/" label="React.js" /> and deployed onto <Link key="2" href="https://www.heroku.com/" label="Heroku" /> with the help of <Link key="3" href="https://nodejs.org/" label="Node.js" />. The source code for the site can be found on <Link key="4" href="https://github.com/the405/the405.net" label="GitHub" />.</p>
          <p>This site is a study into web development with React. It contains a collection of small widgets I've tinkered with in my free time, as well as my web CV. All tools and content in general on this site is subject to change at any point in time.</p>
        </div>
      </div>
		</div>
    <KeyboardEventHandler
      handleKeys={['up', 'down', 'left', 'right', 'a', 'b']}
      onKeyEvent={(key, e) => KonamiCode(e)}
    />
  </div>
);

export { Home };
