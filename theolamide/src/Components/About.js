import React from 'react';
import LogoandHam from './LogoAndHam';
import styled from 'styled-components';

import Profile from '../Images/About/Profile.jpg';



const About = (props) => {

    return (
        <RootWrapper>
            <LogoandHam drawerToggleClickHandler={props.drawerToggleClickHandler} />
            <MainContent>
                <AboutWrapper>
                    <AboutHeader>aboutMe</AboutHeader>
                    <AboutParagraph>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </AboutParagraph>
                </AboutWrapper>

                <ProfileImage src={Profile} alt="profile image" />
            </MainContent>
        </RootWrapper>
    )
}

export default About;


const RootWrapper = styled.div`
    height: 96%;
`

const ProfileImage = styled.img`
    margin: 0 auto;
    border-radius: 0.25rem;
    object-fit: cover;
    width: 30%;
    // border: 1px solid blue;
        @media (max-width: 414px) {
            width: 95%;
            margin: 0.5rem auto;
        }
`
const AboutWrapper = styled.div`
    margin: 0 auto;
    width: 55%;
    background: #BCE5B9;
    border-radius: 0.5rem;
    padding: 0 0.5rem;
    
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // border: 1px solid red;
    @media (max-width: 414px) {
        width: 95%;
    }
`
const AboutHeader = styled.h2`
    font-size: 3rem;
    margin: 0.25rem 0;
    color: #67973E;
    // border: 1px solid blue;
    @media (max-width: 414px) {
        margin: 0;
    }
`
const AboutParagraph = styled.p`
    height: 80%;
    margin: 0 auto;
    //border: 1px solid orange;
    color: #0E4416;

`
const MainContent = styled.div`
    margin: auto;
    margin-top: 1rem;
    width: 95%;
    height: 80%;
    display: flex;
    justify-content: space-between;
    // border: 1px solid black;
    overflow: scroll;
        &::-webkit-scrollbar
            {
                width: 6px;
                height: 0px;
                background-color: #E0FCDE;
            } 
        &::-webkit-scrollbar-thumb
            {
                background-color: #134818;
            }

    @media (max-width: 414px) {
        flex-direction: column;
        height: 85%;
    }
`