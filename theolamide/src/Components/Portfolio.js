import React from 'react';
import LogoandHam from './LogoAndHam';
import styled from 'styled-components';

import { PortfolioData } from './PortfolioData'

const Portfolio = (props) => {


    return (
        <RootWrapper>
            <LogoandHam drawerToggleClickHandler={props.drawerToggleClickHandler} />

            <MapWrapper>
                {PortfolioData.map(project => (
                    <div key={project.index}>
                        <ProjectWrapper>
                            <div style={{ width: "55%" }}>
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
                                <div style={{ width: "100%", display: "flex" }}>
                                    <div style={{ width: "55%" }}>
                                        <h3>Tech Stack: </h3>
                                        <TagButtonDiv>
                                            {project.technologies.map(tech => (
                                                <button key={tech} style={{ margin: "0.25rem" }}>
                                                    {tech}
                                                </button>
                                            ))}
                                        </TagButtonDiv>
                                    </div>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ margin: "auto" }} >
                                        <button className="visit">
                                            View Project
                                        </button>
                                    </a>
                                </div>
                            </div>
                            <ProjectCover src={project.cover} alt="project cover photo"></ProjectCover>
                        </ProjectWrapper>
                    </div>
                ))}
            </MapWrapper>

        </RootWrapper>
    )
}

export default Portfolio;

const RootWrapper = styled.div`
    height: 96%;
`

const MapWrapper = styled.div`
    margin: 0 auto;
    width: 95%;
    height: 85%;
    overflow: scroll;
        &::-webkit-scrollbar
            {
                width: 6px;
                height: 0px;
                background-color: white;
            } 
        &::-webkit-scrollbar-thumb
            {
                background-color: #134818;
            }
`

const ProjectWrapper = styled.div`
    margin: 1rem auto;
    width: 90%;
    display: flex;
    justify-content: space-between;
    background: #BCE5B9;
    padding: 1rem;
    border-radius: 0.5rem;
    //border: 1px solid black;
    @media (max-width: 414px) {
        flex-direction: column-reverse;
    }
`

const ProjectCover = styled.img`
    border-radius: 0.25rem;
    object-fit: cover;
    width: 40%;
    @media (max-width: 414px) {
        width: 98%;
        margin: 0 auto;
    }
`
const TagButtonDiv = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
    // border: 1px solid black;
`