import React from 'react';
import styled from 'styled-components';

const Heading = styled.h3`
    font-weight: bold;
    font-weight: 400;
`

const SkillContainer = styled.div`
    margin: 1em;
    display: flex;
`

const Labels = styled.div`
    font-weight: 600;
    text-align: right;
    > div {
        margin-bottom: 0.5em;
    }
`

const Values = styled.div`
    margin-left: 1em;
    > div {
        margin-bottom: 0.5em;
    }
`

const Skills = () => (
    <>
        <Heading>{'> Skills'}</Heading>
        <SkillContainer>
            <Labels>
                <div>Web</div>
                <div>Programming</div>
                <div>Languages</div>
            </Labels>
            <Values>
                <div>JavaScript, React, Redux, Node, HTML5, CSS3/SASS</div>
                <div>C/C++/C#, Python</div>
                <div>Finnish, English, Swedish</div>
            </Values>
        </SkillContainer>
    </>
)

export default Skills;
