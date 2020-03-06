import React from 'react';
import styled from 'styled-components';
import Particles from 'react-particles-js';
import ComingSoon from '../Images/ComingSoonCover/ComingSoon.jpg';
import Git from '../Images/Git.png';
import CSS from '../Images/CSS.png';
import Javascript from '../Images/Javascript.png';
import NodeJs from '../Images/NodeJs.png';
import ReactJs from '../Images/ReactJs.png';


const RootWrapper = styled.div`
    background: #282828;
    width: 100%;
    height: 100%;
`


export default function Home() {


    return (

        <div>

            <Particles
                params={{
                    "particles": {
                        "number": {
                            "value": 8,
                            "density": {
                                "enable": true,
                                "value_area": 800
                            }
                        },
                        "line_linked": {
                            "enable": false
                        },
                        "move": {
                            "speed": 5,
                            "out_mode": "out"
                        },
                        "shape": {
                            "type": [
                                "images",
                                "circle"
                            ],
                            "images": [
                                {
                                    "src": `${Git}`,
                                    "height": 20,
                                    "width": 20
                                }
                                ,
                                {
                                    "src": `${CSS}`,
                                    "height": 20,
                                    "width": 20
                                },
                                {
                                    "src": `${Javascript}`,
                                    "height": 20,
                                    "width": 20
                                },
                                {
                                    "src": `${NodeJs}`,
                                    "height": 20,
                                    "width": 20
                                },
                                {
                                    "src": `${ReactJs}`,
                                    "height": 20,
                                    "width": 20
                                }
                            ]
                        },
                        "color": {
                            "value": "#114911"
                        },
                        "size": {
                            "value": 30,
                            "random": false,
                            "anim": {
                                "enable": true,
                                "speed": 4,
                                "size_min": 15,
                                "sync": false
                            }
                        },
                        interactivity: {
                            detect_on: "window",
                            events: {
                                onhover: {
                                    enable: true,
                                    mode: "repulse"
                                },
                                onclick: {
                                    enable: false,
                                    mode: "bubble"
                                },
                                resize: true
                            },
                            modes: {
                                grab: {
                                    distance: 400,
                                    line_linked: {
                                        opacity: 1
                                    }
                                },
                                bubble: {
                                    distance: 400,
                                    size: 40,
                                    duration: 2,
                                    opacity: 8,
                                    speed: 3
                                },
                                repulse: {
                                    distance: 100,
                                    duration: 0.4
                                },
                                push: {
                                    particles_nb: 4
                                },
                                remove: {
                                    particles_nb: 2
                                }
                            }
                        },
                    },

                    "retina_detect": false
                }}
                style={{
                    width: '100%',
                    background: `#77A577`
                }} />
        </div>
    )
}