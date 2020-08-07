import React from 'react';

// import css
import './footer.css';
import './footer-responsive.css';

// import icones
import logo from '../../assets/icones/logo.png'
import react from '../../assets/icones/React.png'
import xd from '../../assets/icones/AdobeXd.png'

const Footer = () => {
    return (
        <div className="footerContainer">
            <div className="footerContent">
                <img className="logo" src={logo} alt="logo"/>
                <h2 className="quote">A problem without a solution is a poorly stated problem.</h2>
                <h1 className="author">Albert Einstein</h1>
                <h3 className="made">Made with :</h3>
                <div className="logos">
                    <img className="react" src={react} alt="react"/>
                    <img className="xd" src={xd} alt="xd"/>
                </div>
                <div className="background"/>
            </div>
        </div>
    )
}

export default Footer;