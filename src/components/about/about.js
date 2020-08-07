import React, {useState} from 'react';

// import css
import './about.css';
import './about-responsive.css';
import './about-animation.css';

const About = () => {
    const [graphicHide, setGraphicHide] = useState("hide");
    const [graphicShow, setGraphicShow] = useState("show");
    const [devHide, setDevHide] = useState("hide");
    const [devShow, setDevShow] = useState("show");
    const toggleGraphics = (mouse) => {
        if  (mouse)
        {
            setGraphicHide("show");
            setGraphicShow("hide"); 
        }
        else
        {
            setGraphicHide("hide");
            setGraphicShow("show"); 
        }
    }

    const toggleDev = (mouse) => {
        if  (mouse)
        {
            setDevHide("show");
            setDevShow("hide"); 
        }
        else
        {
            setDevHide("hide");
            setDevShow("show"); 
        }
    }

    return (
        <div className="aboutContainer">
            <div id="aboutme"/>
            <div className="aboutContent">
                <h2 className="About">About me</h2>
                <h3 className="title">Hi! I am Evan. Nice to meet you.</h3>
                <p className="paragraphe">
                Photoshop, Illustrator, Xd, i use these softwares since 2015.
                I have always loved the graphics’ universe and it helped me a lot when starting coding for websites.
                Thanks to 42 school, this school i joined in 2019 where i improved a lot.
                I am now building platforms with famous library react. You can now find some of my project below, on <a className="underline" href="https://github.com/ednese" target="_blank" rel="noopener noreferrer">GitHub</a> or <a className="underline" href="https://www.youtube.com/channel/UCtizZQJIawyacWVMO5ZRs7Q" target="_blank" rel="noopener noreferrer">Youtube</a>.
                </p>
                <h3 id="T1" className="title">SKILLS</h3>
                <div className="skills">
                    <div onMouseOver={() => toggleGraphics(1)} onMouseOut={() => toggleGraphics(0)} className="graphics">
                        <span id="1" className={graphicShow}>GRAPHICS</span>
                        <span id="2" className={graphicHide}>
                            Photoshop, Illustrator,<br/>
                            InDesign, After Effect,<br/>
                            Xd, Premiere Pro.
                        </span>
                    </div>
                    <div onMouseOver={() => toggleDev(1)} onMouseOut={() => toggleDev(0)} className="developement">
                        <span id="3" className={devShow}>DEVELOPEMENT</span>
                        <span id="4" className={devHide}>
                            HTML, CSS & SASS,<br/>
                            Git, JavaScript,<br/>
                            React.JS, Jquery.
                        </span>
                    </div>
                </div>
                <div className="bg"/>
            </div>
        </div>
    )
}

export default About;