import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { betAppLoginData, shopAppLoginData } from '../../InfoObjects/DevObjects';
import LoginData from '../LoginData/LoginData';

const SingleProject = (props) => {
    const handleCopy = (e, id, value) => {
        e.stopPropagation();

        const copyId = document.getElementById(id);
        copyId.select();
        document.execCommand('Copy');
        copyId.value = "Copied";

        copyId.style.backgroundColor = "#3A3856";
        copyId.style.color = "#E0E0E0";
        setTimeout(() => {
            copyId.value = value;
            copyId.style.backgroundColor = "#E0E0E0";
            copyId.style.color = "#000";
        }, 1000)
    }

    return (
        <div className="project-container">
            <div className="project-info">
                <div className="project-title">
                    <a href={props.project.link} target="_blank" rel="noreferrer">
                        {props.project.title}
                    </a>
                </div>
                <div className="project-header">{props.project.header}</div>
                <LoginData data={props.project.title === "Betting website" ? betAppLoginData : shopAppLoginData} handleCopy={handleCopy} />
                <div className="project-text">{props.project.text}</div>
                <div className="project-link">
                    <a href={props.project.link} target="_blank" rel="noreferrer">
                        <span>Visit {props.project.title}</span>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </a>
                </div>
            </div>
            <div className="project-picture">
                <img src={props.project.imgSrc} alt={props.project.title} />
            </div>
        </div>
    );
};

export default SingleProject;