import React from 'react';
import skillObject from './skillObject';
import SingleSkill from './SingleSkill';
import './styles.scss';

const Skills = (props) => {

    const skillDivs = skillObject.map(skill => {
        return <SingleSkill key={skill.title} skill={skill} />
    })

    return (
        <div className="skills-container" id="scroll-to-body">
            <div className="skills-title">What I offer</div>
            <div className="skills-body">{skillDivs}</div>
        </div>
    );
};

export default Skills;