import React from 'react';

// import img
import discord from '../../assets/imgs/discord.png'
import projectoi from '../../assets/imgs/projectoi.png'
import upstudio from '../../assets/imgs/upstudio.png'
import kick from '../../assets/imgs/kickapp.png'

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
                    <a className="opace" href="https://kickapp.fr">
                        <img className="imgdiv" src={kick} alt="img"/>
                        <div className="info">
                            <h1>Kick App - Web Designer</h1>
                            <p>Kick is a phone app based on the Ionic framework and Angular. I was hired to to design the website using Illustrator, Xd and Photoshop.</p>
                        </div>
                    </a>
                    <a className="opace" href="https://dribbble.com/shots/13953856-Dashboard-and-Web-hosting-page-Projec-toi">
                        <img className="imgdiv" src={projectoi} alt="img"/>
                        <div className="info">
                            <h1>Projec'toi - Web Designer</h1>
                            <p>Projec'toi is a company that connects freelancers with clients. My role in this project was to design a few pages using Photoshop and Xd.</p>
                        </div>
                    </a>
                    <a className="opace" href="https://discordinvites.net">
                        <img className="imgdiv" src={discord} alt="img"/>
                        <div className="info">
                            <h1>DiscordInvites - Front End</h1>
                            <p>DiscordInvites is a discord server advertising website. I assisted the team on the app using jQuery, HTML and CSS. The app source code is private.</p>
                        </div>
                    </a>
                    <a className="opace" href="https://github.com/ednese/upstudio-twitch">
                        <img className="imgdiv" src={upstudio} alt="img"/>
                        <div className="info">
                            <h1>Upstudio - Dev Front</h1>
                            <p>Upstudio is a twitch account about music industry. I worked on the front-end in this project with React.JS and Redux for this app.</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Projects;