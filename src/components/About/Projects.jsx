import React from 'react';
import styled from 'styled-components';

const Heading = styled.h3`
  font-weight: bold;
  font-weight: 400;
`

const ItemContainer = styled.div`
  display: flex;
`

const Item = styled.div`
  margin: 1em;
  display: flex;
  justify-content: space-between;
  flex-basis: 50%;
`
const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
`

const Emphasis = styled.div`
    font-weight: 600;
`

const Italic = styled.div`
    font-style: italic;
`

const Projects = () => (
  <>
    <Heading>{'> Projects'}</Heading>
    <ItemContainer>
      <Item>
        <Info>
          <Emphasis>Metsähallitus (Finnish Forest Administration)</Emphasis>
          <div>Programmer</div>
          <Italic>Hunting quarry planning and management system</Italic>
        </Info>
      </Item>
      <Item>
        <Info>
          <Emphasis>EPV Windpower Ltd.</Emphasis>
          <div>Lead programmer</div>
          <Italic>Contract and property management system</Italic>
        </Info>
      </Item>
      <Item>
        <Info>
          <Emphasis>Steveco Ltd.</Emphasis>
          <div>Programmer</div>
          <Italic>Intranet and content management systems</Italic>
        </Info>
      </Item>
    </ItemContainer>
    <ItemContainer>
      <Item>
        <Info>
          <Emphasis>Church in Helsinki</Emphasis>
          <div>Programmer</div>
          <Italic>CMS based website</Italic>
        </Info>
      </Item>
      <Item>
        <Info>
          <Emphasis>Finnish Communications Regulatory Authority</Emphasis>
          <div>Programmer</div>
          <Italic>RAHAS radio license management system</Italic>
        </Info>
      </Item>
      <Item>
        <Info>
          <Emphasis>The Finnish Ministry of Justice</Emphasis>
          <div>Programmer</div>
          <Italic>Intranet and content management systems</Italic>
        </Info>
      </Item>
    </ItemContainer>
  </>
)

export default Projects;
