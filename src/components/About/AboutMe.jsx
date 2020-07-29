import React from 'react';
import styled from 'styled-components';

const Heading = styled.h3`
    font-weight: bold;
    font-weight: 400;
`

const AboutContainer = styled.div`
    margin: 1em;
    display: flex;
`

const Labels = styled.div`
    font-weight: 600;
    text-align: right;
    > div {
        margin-bottom: 0.5em;
        white-space: nowrap;
    }
`

const Values = styled.div`
    margin-left: 1em;
    > div {
        margin-bottom: 0.5em;
    }
`

const AboutMe = () => (
    <>
        <Heading>{'> About me'}</Heading>
        <AboutContainer>
            <Labels>
                <div>Hobbies</div>
                <div>Military service</div>
                <div>Bio</div>
            </Labels>
            <Values>
                <div>Computers and technology, programming, drawing and painting, video games</div>
                <div>Finished I/08, Armored Brigade, Helsinki Air Defense Regiment, Parola. Rank: artilleryman</div>
                <div>From an early age, I’ve always had a knack for all things IT. With a love for puzzles and problem solving, I enjoy the challenges the field offers. I may have finished my studies, but I don’t intend to stop learning.</div>
            </Values>
        </AboutContainer>
    </>
)

export default AboutMe;
