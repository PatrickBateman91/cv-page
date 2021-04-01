import React from 'react';
import './styles.scss';

const AboutMe = (props) => {
    return (
        <div className="about-me-holder">

            <div className="about-me-first-paragraph">
                Hi, I'm Amar Spahić.
                </div>

            <div className="about-me-title">
                <span>I'm a M.E.R.N. stack developer with background in the film industry.</span>
            </div>

            <div className="about-me-second-paragraph">
                I am dedicated and persistent individual who excels under stress. I am currently working as a junior web developer in Zagreb.
            </div>

        </div>
    );
};

export default AboutMe;