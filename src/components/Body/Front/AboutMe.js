import React from 'react';
import './styles.scss';

const AboutMe = (props) => {
    return (
        <div className="about-me-holder">

            <div className="about-me-first-paragraph">
                Hi, my name is Amar Spahić.
            </div>

            <div className="about-me-title">
                <span>I'm a full-stack developer with a background in the film industry.</span>
            </div>

            <div className="about-me-second-paragraph">
                I would describe myself as an active, dedicated and persistent individual who excels under stress. I am currently working as a full-stack developer in Zagreb for <a href="https://www.intellegens.hr" rel="noreferrer" target="_blank">Intellegens</a>
            </div>

        </div>
    );
};

export default AboutMe;