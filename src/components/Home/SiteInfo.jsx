import React from 'react';
import { Link } from '../common/Link'
import './SiteInfo.scss';

const SiteInfo = () => (
  <div className="home__about">
    <p>This website has been created with <Link key="1" href="https://reactjs.org/" label="React.js" /> and deployed onto <Link key="2" href="https://www.heroku.com/" label="Heroku" /> with the help of <Link key="3" href="https://nodejs.org/" label="Node.js" />. The source code for the site can be found on <Link key="4" href="https://github.com/the405/arai" label="GitHub" />.</p>
    <p>This site is a study into web development with React. It contains a collection of small widgets I've tinkered with in my free time, as well as my web CV. All tools and content in general on this site is subject to change at any point in time.</p>
  </div>
);

export { SiteInfo };
