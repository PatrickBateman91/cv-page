import React from 'react';
import { Zoom } from 'react-awesome-reveal';
import { filmBio } from '../InfoObjects/FilmObjects';
import './styles.scss';

const HeaderFilmBio = (props) => {
    return (
        <div className="film-short-biography">
            {filmBio.map((statement, index) => {
                return (
                    <Zoom delay={80 * index} direction="top" duration={500} key={statement} triggerOnce	>
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

export default HeaderFilmBio;