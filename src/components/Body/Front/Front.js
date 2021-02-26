import React from 'react';
import AboutMe from './AboutMe';
import GoDownIcon from './GoDownIcon';
import Portrait from '../../../images/Portrait.jpg';

const Front = (props) => {
    return (
        <div className="front-container">
            <div className="about-me-container">
                <AboutMe />
                <div className="portrait-container">
                    <img src={Portrait} alt="Amar Spahić" />
                </div>
            </div>
            <GoDownIcon positionIcon={props.positionIcon} />
        </div>
    );
};

export default Front;