import React from 'react';
import Zoom from 'react-reveal/Zoom';
import {devBio_EN} from '../TextObjects';

const UpperDevBio = (props) => {
    return (
        <div className="dev-short-biography">
            {devBio_EN.map((statement, index) => {
               
                return (
                    <Zoom delay={90 * index} duration={500} key={statement}>
                    <div className="main-list-dev">
                    <img src={props.bullet} alt="bullet point" />
                    <span>{statement}</span>
                </div>
                </Zoom>
                )
            })}
    </div>
    );
};

export default UpperDevBio;