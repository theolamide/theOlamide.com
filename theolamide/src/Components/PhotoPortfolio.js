import React from 'react';
import styled from 'styled-components'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import LogoandHam from './LogoAndHam';

import Camera from '../Images/Icons/Camera.png';
import CreativeCloud from '../Images/Icons/CreativeCloud.png';



const PhotoPortfolio = (props) => {

    return (
        <RootWrapper>
            <LogoandHam drawerToggleClickHandler={props.drawerToggleClickHandler} />

            <Car showArrows={true} autoPlay={true} infiniteLoop={true}>
                <div>
                    <img src={Camera}
                    // style={{ objectFit: "cover", width: "35%" }}
                    />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={CreativeCloud}
                    // style={{ objectFit: "cover", width: "35%" }} 
                    />
                    <p className="legend">Legend 2</p>
                </div>
            </Car>
        </RootWrapper>
    )
}

export default PhotoPortfolio;

const RootWrapper = styled.div`
    height: 96%;
`
const Car = styled(Carousel)`
    margin: 0 auto;
    width: 90%;
    height: 85%;
    background: white;
    // border: 2px solid blue;

`