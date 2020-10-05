import React, {useState} from 'react';

// import css
import './nav.css';
import './nav-responsive.css';
import './nav-animation.css';

// import icone
import arrow from '../../assets/icones/arrow.png'

const Nav = () => {
    window.addEventListener('scroll', () => functionCloseNav());
    let nbr = 0;
    const [navbar, setNavbar] = useState("default");
    const [navArrow, setNavArrow] = useState("");
    const [navContent, setNavContent] = useState('navContent');
    
    const toggleNav = () => {
        if (nbr === 1)
        {
            nbr = 2;
            setNavbar("closeNav");
            setNavArrow("close");
        }
        else if (nbr !== 1)
        {
            nbr = 1;
            setNavbar("openNav");
            setNavArrow("open");
        }
    }

    const functionCloseNav = () => {
        if (window.innerWidth > 550 && window.scrollY > 10)
            setNavContent("navContent back")
        else if (navContent === "navContent back")
            setNavContent("navContent without")
        if (nbr === 1)
        {
            setNavbar("closeNav");
            setNavArrow("close");
        }
    }

    return (
        <div className="navContainer">
            <div className={navContent}>
                <ul className={navbar} id="navMenuPlus"><li><a href="/#home">Home</a></li><li><a href="/#aboutme">About me</a></li><li><a href="/#projects">Projects</a></li><li><a href="/#contactme">Contact me</a></li></ul>
                <div className={navArrow} id="arrow">
                    <img onClick={() => toggleNav()} src={arrow} className="arrow" alt="arrow"/>
                </div>
                <ul className="navMenu">
                    <li><a href="/#home">Home</a></li>
                    <li><a href="/#aboutme">About me</a></li>
                    <li><a href="/#projects">Projects</a></li>
                    <li><a href="/#contactme">Contact me</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Nav;