import React from 'react';
import { BaseInfo } from './BaseInfo';
import './About.scss';

const About = () => (
  <div className="about about--container">
    <div className="about__content">
      <BaseInfo />
      <div className="section section--skills">
        <h3 className="color-me">
          {'> '}
          Skills
        </h3>
        <table>
          <tbody>
            <tr>
              <td className="skills__title">
                <span className="emphasis">
                  Programming
                </span>
              </td>
              <td className="skills__description">
                <span>
                  C/C++/C#, Node.JS, Java, Python
                </span>
              </td>
            </tr>
            <tr>
              <td className="skills__title">
                <span className="emphasis">
                  Web
                </span>
              </td>
              <td className="skills__description">
                <span>
                  JavaScript, React, Redux, HTML5, CSS3/SASS
                </span>
              </td>
            </tr>
            <tr>
              <td className="skills__title">
                <span className="emphasis">
                  Languages
                </span>
              </td>
              <td className="skills__description">
                <span>
                  Finnish, English, Swedish
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="section section--education">
        <h3 className="color-me">
          {'> '}
          Education
        </h3>
        <div className="item item--education">
          <div className="item__info">
            <span className="emphasis">M.Sc. in Information Technology</span>
            <span>Tampere University of Technology</span>
            <span className="indent">Pervasive Systems</span>
          </div>
          <div className="item__date">
            <span className="color-me">Tampere, Finland</span>
            <span>Aug. 2016 - Nov. 2018</span>
          </div>
        </div>
        <div className="item item--education">
          <div className="item__info">
            <span className="emphasis">B.Sc. in Information Technology</span>
            <span>Tampere University of Technology</span>
            <span className="indent">Information Security</span>
          </div>
          <div className="item__date">
            <span className="color-me">Tampere, Finland</span>
            <span>Aug. 2007 - May 2016</span>
          </div>
        </div>
      </div>
      <div className="section section--experience">
        <h3 className="color-me">
          {'> '}
          Experience
        </h3>
        <div className="item item--experience">
          <div className="item__info">
            <span className="emphasis">Web developer</span>
            <span>Abako Ltd.</span>
            <span className="indent">Developed websites, CMS and web based data systems for business clients.</span>
          </div>
          <div className="item__date">
            <span className="color-me">Tampere, Finland</span>
            <span>12.09.2016 - PRESENT</span>
          </div>
        </div>
        <div className="item item--experience">
          <div className="item__info">
            <span className="emphasis">Warehouse worker</span>
            <span>Hytar Ltd.</span>
            <span className="indent">Delivered and shelved hydraulic components to a heavy machinery factory and other clients.</span>
          </div>
          <div className="item__date">
            <span className="color-me">Tampere, Finland</span>
            <span>06.06.2016 - 26.08.2016</span>
            <span>08.06.2015 - 31.08.2015</span>
          </div>
        </div>
        <div className="item item--experience">
          <div className="item__info">
            <span className="emphasis">Multi-service employee</span>
            <span>ISS Services Ltd.</span>
            <span className="indent">Took care of office mail and postal services, office supply, audio/video equipment maintenance, office cleaning.</span>
          </div>
          <div className="item__date">
            <span className="color-me">Vantaa, Finland</span>
            <span>04.06.2014 - 08.08.2014</span>
          </div>
        </div>
        <div className="item item--experience">
          <div className="item__info">
            <span className="emphasis">Phone interviewer</span>
            <span>TNS Gallup Ltd.</span>
            <span className="indent">Conducted opinion and marketing surveys via telephone with the help of a computer terminal.</span>
          </div>
          <div className="item__date">
            <span className="color-me">Tampere, Finland</span>
            <span>30.11.2007 - 31.08.2011</span>
          </div>
        </div>
      </div>
      <div className="section section--projects">
        <h3 className="color-me">
          {'> '}
          Projects
        </h3>
        <div className="projects__wrapper">
          <div className="item item--projects">
            <div className="item__info">
              <span className="emphasis">Metsähallitus (Finnish Forest Administration)</span>
              <span>Programmer</span>
              <span className="indent">Hunting quarry planning and management system</span>
            </div>
          </div>
          <div className="item item--projects">
            <div className="item__info">
              <span className="emphasis">EPV Windpower Ltd.</span>
              <span>Lead programmer</span>
              <span className="indent">Contract and property management system</span>
            </div>
          </div>
          <div className="item item--projects">
            <div className="item__info">
              <span className="emphasis">Steveco Ltd.</span>
              <span>Programmer</span>
              <span className="indent">Intranet and content management systems</span>
            </div>
          </div>
          <div className="item item--projects">
            <div className="item__info">
              <span className="emphasis">Church in Helsinki</span>
              <span>Programmer</span>
              <span className="indent">CMS based website</span>
            </div>
          </div>
          <div className="item item--projects">
            <div className="item__info">
              <span className="emphasis">Finnish Communications Regulatory Authority</span>
              <span>Programmer</span>
              <span className="indent">RAHAS radio license management system</span>
            </div>
          </div>
          <div className="item item--projects">
            <div className="item__info">
              <span className="emphasis">The Finnish Ministry of Justice</span>
              <span>Programmer</span>
              <span className="indent">Intranet and content management systems</span>
            </div>
          </div>
        </div>
      </div>
      <div className="section section--aboutme">
        <h3 className="color-me">
          {'> '}
          About me
        </h3>
        <table>
          <tbody>
            <tr>
              <td className="aboutme__title">
                <span className="emphasis">
                  Hobbies
                </span>
              </td>
              <td className="aboutme__description">
                <span>
                  Computers and technology, programming, drawing and painting, video games
                </span>
              </td>
            </tr>
            <tr>
              <td className="aboutme__title">
                <span className="emphasis">
                  Military service
                </span>
              </td>
              <td className="aboutme__description">
                <span>
                  Finished I/08, Armored Brigade, Helsinki Air Defense Regiment, Parola. Rank: artilleryman
                </span>
              </td>
            </tr>
            <tr>
              <td className="aboutme__title">
                <span className="emphasis">
                  Bio
                </span>
              </td>
              <td className="aboutme__description">
                <span>
                  From an early age, I’ve always had a knack for all things IT. With a love for puzzles and problem solving, I enjoy the challenges the field offers. I may have finished my studies, but I don’t intend to stop learning.
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export { About };
