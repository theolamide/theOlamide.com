import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Logo from '../Images/Logo.png';
import HamOpen from '../Images/HamOpen.png'


const LogoandHam = (props) => {


    return (
        <TopContainer>
            <Link to="/">
                <LogoWrapper src={Logo} />
            </Link>
            <HamWrapper onClick={props.drawerToggleClickHandler}>
                <OpenHamTag src={HamOpen} />
            </HamWrapper>
        </TopContainer>
    )
}

export default LogoandHam;

const TopContainer = styled.div`
    width: 95%;
    display: flex;
    justify-content: space-between;
    margin: 1rem auto;
`
const LogoWrapper = styled.img`
    width: 2rem;
    object-fit: cover;
    cursor: pointer;
`
const HamWrapper = styled.div`
    cursor: pointer;
`
const OpenHamTag = styled.img`
    object-fit: cover;
    width: 3rem;
    margin: auto;
`