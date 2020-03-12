import React from 'react';
import { withRouter } from "react-router-dom";
import Logo from '../Images/Logo.png';
import styled from 'styled-components';



const RootWrapper = styled.div`
    height: 10%;
    width: 100%;
    background: #BCE5B9;
    position: fixed;
    top:0;
    right:0;
    z-index: 200;
    display:flex;
    justify-content: space-between;
    // border: 1px solid black;
`
const TopContainer = styled.div`
    width: 95%;
    display: flex;
    justify-content: space-between;
    margin: 1rem auto;
    // border: 1px solid black;
`
const HamWrapper = styled.div`
    cursor: pointer;
`

const TopDrawer = ({ closeDrawer }) => {


    return (
        <RootWrapper>
            <TopContainer>
                <img src={Logo} style={{ width: "2.5rem" }} />

                <HamWrapper onClick={closeDrawer}>
                    X
                </HamWrapper>
            </TopContainer>
        </RootWrapper>
    )
};

export default TopDrawer;