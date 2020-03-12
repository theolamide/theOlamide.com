import React from 'react';
import styled from 'styled-components';
import Logo from '../Images/Logo.png';
import ComingSoon from '../Images/ComingSoonCover/ComingSoon.jpg';



const RootWrapper = styled.div`
    width: 100%;
`

const HamWrapper = styled.div`
    cursor: pointer;
`

const Home = (props) => {

    return (
        <RootWrapper>
            <TopContainer>
                <img src={Logo} style={{ width: "2rem" }} />
                <HamWrapper onClick={props.drawerToggleClickHandler}>
                    Hamburger
                </HamWrapper>
            </TopContainer>
            <h1>Home</h1>
        </RootWrapper>

    )
}

const TopContainer = styled.div`
    width: 95%;
    display: flex;
    justify-content: space-between;
    margin: 1rem auto;
`

export default Home;