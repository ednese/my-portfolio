import React from 'react';

// import img
import opace from '../../assets/imgs/opace.png'
import projectoi from '../../assets/imgs/projectoi.png'

// import css
import './projects.css';
import './projects-responsive.css';

const Projects = () => {
    return (
        <div className="projectsContainer">
            <div id="projects"/>
            <div className="projectsContent">
                <h2 className="projects">My Recent Work</h2>
                <h3 className="desc">Here are a few projects I've worked on recently.</h3>
                <div className="grid-2">
                    <a className="opace" href="google.com">
                        <img className="imgdiv" src={opace} alt="img"/>
                        <div className="info">
                            <h1>Opace</h1>
                            <p>desc</p>
                        </div>
                    </a>
                    <a className="opace" href="https://dribbble.com/shots/13953856-Dashboard-and-Web-hosting-page-Projec-toi">
                        <img className="imgdiv" src={projectoi} alt="img"/>
                        <div className="info">
                            <h1>Projectoi</h1>
                            <p>desc</p>
                        </div>
                    </a>
                    
                </div>
                <h2 className="projects">(More projects are comming)</h2>
            </div>
        </div>
    )
}

export default Projects;