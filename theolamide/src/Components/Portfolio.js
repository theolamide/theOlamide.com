import React from 'react';
import LogoandHam from './LogoAndHam';
import styled from 'styled-components';

import { PortfolioData } from './PortfolioData'
import MerchDropperCover from '../Images/PortfolioGallery/MerchDropperCover.JPG'

const Portfolio = (props) => {


    return (
        <div>
            <LogoandHam drawerToggleClickHandler={props.drawerToggleClickHandler} />
            {/* <h2>Portfolio</h2> */}

            {/* <div>
                    <h2>
                        Merch Dropper
                    </h2>
                    <p>
                        It's the fastest way to set up a hassle free merch shop. Platform to upload designs and create products that plug into scalablepress.com to create a drop-shipping online shop.
                    </p>
                    <h3>Technologies Used</h3>
                    <button>ReactJS</button>
                    <button>NodeJS</button>
                    <button>Express</button>
                    <button>knex</button>
                    <button>PostgressSQL</button>
                </div>
                <ProjectCover src={MerchDropperCover} alt="project cover image" />
                 */}

            {PortfolioData.map(project => (
                <div key={project.index}>
                    <ProjectWrapper>
                        <div>
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                            <h3>Technologies Used</h3>
                            {project.technologies.map(tech => (
                                <button key={tech}>
                                    {tech}
                                </button>
                            ))}

                        </div>
                        <ProjectCover src={project.cover} alt="project cover photo"></ProjectCover>
                    </ProjectWrapper>
                </div>
            ))}

        </div>
    )
}

export default Portfolio;

const ProjectWrapper = styled.div`
    margin: 0 auto;
    width: 90%;
    display: flex;
    justify-content: space-between;
    background: #BCE5B9;
    padding: 1rem;
    border-radius: 0.5rem;
    //border: 1px solid red;
`

const ProjectCover = styled.img`
    border-radius: 0.25rem;
    object-fit: cover;
    width: 40%;
    @media (max-width: 414px) {
        width: 7rem;
        margin-left: 65%;
    }
`