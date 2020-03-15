import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Logo from '../Images/Logo.png';


const LogoandHam = (props) => {


    return (
        <TopContainer>
            <Link to="/">
                <LogoWrapper src={Logo} />
            </Link>
            <HamWrapper onClick={props.drawerToggleClickHandler}>
                Hamburger
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