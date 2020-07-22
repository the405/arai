import React from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';

import { Banner } from './Banner';
import { JumboLinks } from './JumboLinks';
import { SiteInfo } from './SiteInfo';
import { KonamiCode } from '../Tools/KonamiCode';
import './Home.scss';

const Home = () => (
  <>
    <div className="home d-flex flex-column justify-content-around">
      <Banner />
      <div className="home__content">
        <JumboLinks />
        <SiteInfo />
      </div>
		</div>
    <KeyboardEventHandler
      handleKeys={['up', 'down', 'left', 'right', 'a', 'b']}
      onKeyEvent={(key, e) => KonamiCode(e)}
    />
  </>
);

export { Home };
