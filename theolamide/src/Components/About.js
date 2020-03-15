import React from 'react';
import LogoandHam from './LogoAndHam';
import styled from 'styled-components';

import Profile from '../Images/About/Profile.jpg';



const About = (props) => {


    return (
        <div>
            <LogoandHam drawerToggleClickHandler={props.drawerToggleClickHandler} />
            <MainContent>
                <AboutWrapper>
                    <AboutHeader>aboutMe</AboutHeader>
                    <AboutParagraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </AboutParagraph>
                </AboutWrapper>
                <ProfileImage src={Profile} />
            </MainContent>
        </div>
    )
}

const ProfileImage = styled.img`
    border-radius: 0.75rem;
    object-fit: cover;
    width: 20rem;
`
const AboutWrapper = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    // border: 1px solid black;
`
const AboutHeader = styled.h2`
    font-size: 4rem;
    margin: 0.25rem 0;
    color: #67973E;
    // border: 1px solid black;
`
const AboutParagraph = styled.p`
    margin: 0 auto;
    font-size: 1.2rem;
    font-style: bold;
    // border: 1px solid black;
    color: #0E4416;;
`
const MainContent = styled.div`
    margin: auto;
    margin-top: 4rem;
    width: 90%;
    height: 70vh;
    display: flex;
    justify-content: space-around;
    // border: 1px solid black;
`

export default About;