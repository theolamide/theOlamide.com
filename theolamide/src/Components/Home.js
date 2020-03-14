import React from 'react';
import styled from 'styled-components';
import Logo from '../Images/Logo.png';
import ComingSoon from '../Images/ComingSoonCover/ComingSoon.jpg';





const Home = (props) => {

    return (
        <RootWrapper>
            <TopContainer>
                <img src={Logo} style={{ width: "2rem" }} />
                <HamWrapper onClick={props.drawerToggleClickHandler}>
                    Hamburger
                </HamWrapper>
            </TopContainer>
            <MainContent>
                <TitlesWrapper>
                    <NameTitle>theỌlámidé</NameTitle>
                    <Titles>Titles / Titles / Titles</Titles>
                </TitlesWrapper>

                <MainContentLogo src={Logo} />

            </MainContent>
        </RootWrapper>

    )
}



const RootWrapper = styled.div`
    width: 100%;
    //height: 100%;
`

const HamWrapper = styled.div`
    cursor: pointer;
`

const TopContainer = styled.div`
    width: 95%;
    display: flex;
    justify-content: space-between;
    margin: 1rem auto;
`
const MainContent = styled.div`
    margin: auto;
    margin-top: 5rem;
    width: 90%;
    height: 70vh;
    display: flex;
    justify-content: space-around;
    border: 1px solid black;
`
const TitlesWrapper = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: 1px solid black;
`
const NameTitle = styled.h1`
    font-size: 7rem;
    color: #A2A9AA;
    //border: 1px solid black;
`
const Titles = styled.h2`
border: 1px solid black;
`
const MainContentLogo = styled.img`
    width: 15rem;
    object-fit: cover;
    margin: auto;
`

export default Home;