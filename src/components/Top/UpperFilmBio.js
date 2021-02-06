import React from 'react';
import Zoom from 'react-reveal/Zoom';
import {filmBio_EN} from '../TextObjects';


const UpperFilmBio = (props) => {
    return (
        <div className="film-short-biography">
            {filmBio_EN.map((statement, index) => {
                return (
                    <Zoom delay={80 * index} duration={500} key={statement}>
                    <div className="main-list-film">
                    <span>{statement}</span>
                    <img src={props.bullet} alt="bullet point" />
                </div>
                </Zoom>
                )
            })}
    </div>
    );
};

export default UpperFilmBio;