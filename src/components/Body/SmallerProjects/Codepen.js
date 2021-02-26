import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';

const Codepen = (props) => {

    return (
        <div className="single-codepen-app">
            <div className="codepen-title">
                <a href={props.app.link} target="_blank" rel="noreferrer">
                    {props.app.title}
                </a>
            </div>
            <div className="codepen-text">{props.app.text}</div>
            <div className="codepen-image-container">
                <img src={props.app.imgSrc} alt={props.app.title} />
            </div>
            <div className="codepen-link">
                <a href={props.app.link} target="_blank" rel="noreferrer">
                    <span>Visit {props.app.title}</span>
                    <FontAwesomeIcon icon={faArrowRight} />
                </a>
            </div>
        </div>
    );
};

export default Codepen;