import React from 'react';

// import css
import './home.css';
import './home-responsive.css';
import './home-animation.scss';

// import icone
import arrow from '../../assets/icones/arrow.png'

const Home = () => {
    return (
        <div className="homeContainer">
            <div id="home"/>
            <div className="homeContent">
                <h1 className="evanSende">Evan Sende,</h1>
                <h2 className="texte">Designer / Front End Developer, based in Paris.</h2>
                <a href="../../CV-EVAN.pdf" className="btn CV" target="_blank" rel="noopener noreferrer" download="CV">Download CV</a>
                <a id="arrow" href="/#aboutme"><img src={arrow} alt="arrow"/></a>
            </div>
        </div>
    )
}

export default Home;