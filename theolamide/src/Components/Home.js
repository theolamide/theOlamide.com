import React from 'react';
import LogoandHam from './LogoAndHam';
import styled from 'styled-components';
import Logo from '../Images/Logo.png';





const Home = (props) => {

    return (
        <RootWrapper>
            <LogoandHam drawerToggleClickHandler={props.drawerToggleClickHandler} />


            <MainContent>

                <TitlesWrapper>
                    <NameTitle>theỌlámidé</NameTitle>
                    <Titles>Full-Stack Dev. / Mech. Engineer / Photographer</Titles>
                </TitlesWrapper>

                <MainContentLogo src={Logo} />

            </MainContent>
        </RootWrapper>

    )
}

export default Home;

const RootWrapper = styled.div`
    width: 100%;
    //height: 100%;
`
const MainContent = styled.div`
    margin: auto;
    margin-top: 4rem;
    width: 90%;
    height: 70vh;
    display: flex;
    justify-content: space-around;
    // border: 1px solid black;
    @media (max-width: 768px) {
            flex-direction: column-reverse;
            height: 100%;
        }
`
const TitlesWrapper = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    //border-radius: 0.75rem;
    //border-right: 0.25rem solid #67973E;
    @media (max-width: 768px) {
            width: 100%;
            margin: 0 auto;
        }
        @media (max-width: 414px) {
            margin: 3rem auto;
            border: none;
            // border: 1px solid black;
        }
`
const NameTitle = styled.h1`
    font-size: 9rem;
    color: #67973E;    
    // border: 1px solid black;
    
    @media (max-width: 768px) {
            font-size: 5rem;
            margin: 0 auto;
        }
    
        @media (max-width: 414px) {
            font-size: 3rem;
        }
`
const Titles = styled.h2`
    margin: 0 auto;
    color: #0E4416;
    text-align: center;
    // border: 1px solid black;

    @media (max-width: 414px) {
            padding-top: 1rem;
            font-size: 1.05rem;
        }
`
const MainContentLogo = styled.img`
    width: 15rem;
    object-fit: cover;
    margin: auto;
    @media (max-width: 768px) {
            margin: 0 auto;
        }
`
