import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SingleSkill = (props) => {
    return (
        <div className="skill-item">
            <FontAwesomeIcon icon={props.skill.icon} />
            <div className="single-skill-title">{props.skill.title}</div>
            <div className="skill-text">{props.skill.text}</div>
        </div>
    );
};

export default SingleSkill;