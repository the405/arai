import React from 'react';
import portrait from './portrait.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const StyledContainer = styled.div`
    display: flex;
    align-items: center;
`

const Portrait = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
`

const Info = styled.div`
    margin-left: 3em;
    width: 100%;
`

const Heading = styled.h3`
    font-weight: bold;
    font-weight: 400;
`

const Social = styled.div`
    margin: 1em 0;
`

const SocialLabel = styled.span`
    margin-left: 0.5em;
`

const BaseInfo = () => (
    <StyledContainer>
        <Portrait src={portrait} alt="Portrait" />
        <Info>
            <h1>Ahti Ruusuvuori</h1>
            <Heading>{`> Web developer`}</Heading>
            <Social>
                <FontAwesomeIcon icon="envelope" />
                <SocialLabel>ahti.ruusuvuori@gmail.com</SocialLabel>
            </Social>
            <Social>
                <FontAwesomeIcon icon={['fab', 'linkedin']} />
                <SocialLabel>ahtiruusuvuori</SocialLabel>
            </Social>
            <Social>
                <FontAwesomeIcon icon={['fab', 'github']} />
                <SocialLabel>the405</SocialLabel>
            </Social>
        </Info>
    </StyledContainer>
)

export default BaseInfo;
