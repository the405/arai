import React from 'react';
import styled from 'styled-components';

const Heading = styled.h3`
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

const Education = () => (
    <>
        <Heading>{'> Education'}</Heading>
        <Item>
          <Info>
            <Emphasis>M.Sc. in Information Technology</Emphasis>
            <div>Tampere University of Technology</div>
            <Italic>Pervasive Systems</Italic>
          </Info>
          <Date>
            <div>Tampere, Finland</div>
            <div>Aug. 2016 - Nov. 2018</div>
          </Date>
        </Item>
        <Item>
          <Info>
            <Emphasis>B.Sc. in Information Technology</Emphasis>
            <div>Tampere University of Technology</div>
            <Italic>Information Security</Italic>
          </Info>
          <Date>
            <div>Tampere, Finland</div>
            <div>Aug. 2007 - May 2016</div>
          </Date>
        </Item>
    </>
)

export default Education;
