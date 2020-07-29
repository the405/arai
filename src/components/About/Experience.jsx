import React from 'react';
import styled from 'styled-components';

const Heading = styled.h3`
    font-weight: bold;
    font-weight: 400;
`

const Item = styled.div`
    margin: 1em;
    display: flex;
    justify-content: space-between;
`
const Info = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 2;
`

const Date = styled.div`
    display: flex;
    flex-direction: column;
    font-style: italic;
    white-space: nowrap;
    margin-left: 3em;
    > div {
      text-align: right;
    }
`

const Emphasis = styled.div`
    font-weight: 600;
`

const Italic = styled.div`
    font-style: italic;
`

const Experience = () => (
    <>
        <Heading>{'> Experience'}</Heading>
        <Item>
          <Info>
            <Emphasis>Web developer</Emphasis>
            <div>Abako Ltd.</div>
            <Italic>Developed websites, CMS and web based data systems for business clients.</Italic>
          </Info>
          <Date>
            <div className="color-me">Tampere, Finland</div>
            <div>12.09.2016 - PRESENT</div>
          </Date>
        </Item>
        <Item>
          <Info>
            <Emphasis>Warehouse worker</Emphasis>
            <div>Hytar Ltd.</div>
            <Italic>Delivered and shelved hydraulic components to a heavy machinery factory and other clients.</Italic>
          </Info>
          <Date>
            <div className="color-me">Tampere, Finland</div>
            <div>06.06.2016 - 26.08.2016</div>
            <div>08.06.2015 - 31.08.2015</div>
          </Date>
        </Item>
        <Item>
          <Info>
            <Emphasis>Multi-service employee</Emphasis>
            <div>ISS Services Ltd.</div>
            <Italic>Took care of office mail and postal services, office supply, audio/video equipment maintenance, office cleaning.</Italic>
          </Info>
          <Date>
            <div className="color-me">Vantaa, Finland</div>
            <div>04.06.2014 - 08.08.2014</div>
          </Date>
        </Item>
        <Item>
          <Info>
            <Emphasis>Phone interviewer</Emphasis>
            <div>TNS Gallup Ltd.</div>
            <Italic>Conducted opinion and marketing surveys via telephone with the help of a computer terminal.</Italic>
          </Info>
          <Date>
            <div className="color-me">Tampere, Finland</div>
            <div>30.11.2007 - 31.08.2011</div>
          </Date>
        </Item>
    </>
)

export default Experience;
