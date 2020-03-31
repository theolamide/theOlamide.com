import React from 'react';
import LogoandHam from './LogoAndHam';
import styled from 'styled-components';

import { PortfolioData } from './PortfolioData.js'

const DevPortfolio = (props) => {


    return (
        <RootWrapper>
            <LogoandHam drawerToggleClickHandler={props.drawerToggleClickHandler} />

            <MapWrapper>
                {PortfolioData.map(project => (
                    <div key={project.index}>
                        <ProjectWrapper>
                            <div className="mainContent">
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
                                <ButtonsWrapper>
                                    <div className="tagbuttons">
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
                                </ButtonsWrapper>
                            </div>
                            <ProjectCover src={project.cover} alt="project cover photo"></ProjectCover>
                        </ProjectWrapper>
                    </div>
                ))}
            </MapWrapper>

        </RootWrapper>
    )
}

export default DevPortfolio;

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
                background-color: #E0FCDE;
                border-radius: 0.05rem;

            } 
        &::-webkit-scrollbar-thumb
            {
                background-color: #134818;
                border-radius: 0.05rem;
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
        .mainContent{
            width: 55%;
                @media (max-width: 414px) {
                    width:100%;
                }
        }
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
const ButtonsWrapper = styled.div`
    width: 100%;
    display: flex;

    .tagbuttons{
        width: 55%;
        //border: 1px solid black;
    }
    @media (max-width: 414px) {
        flex-direction: column; 
            
        .tagbuttons{
            width: 100%;
            }    
    }
`
const TagButtonDiv = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
    //border: 1px solid black;
        @media (max-width: 414px) {
            margin-bottom: 2rem;
        }
`