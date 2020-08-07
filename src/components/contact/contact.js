import React from 'react';

// import css
import './contact.css';
import './contact-responsive.css';

const Contact = () => {
    return (
        <div className="contactContainer">
            <div id="contactme"/>
            <div className="contactContent">
                <h1 className="title">Interested in working together?</h1>
                <h2 className="desc">I’m always open to discussing product design work or partnership opportunities.</h2>
                <a className="btn contactme" href="mailto:pro@evansende.com">Contact me</a>
                <div className="background"/>
            </div>
        </div>
    )
}

export default Contact;