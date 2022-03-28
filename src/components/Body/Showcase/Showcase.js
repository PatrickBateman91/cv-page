import React from 'react';
import SingleProject from './SingleProject';
import projectsObject from './projectsObject';
import './styles.scss';

const Showcase = (props) => {
    const professionalProjects = projectsObject.filter(p => p.professional).map(project => {
        return <SingleProject key={project.title} project={project} />;
    })
    const personalProjects = projectsObject.filter(p => !p.professional).map(project => {
        return <SingleProject key={project.title} project={project} />;
    })

    return (
        <div className="showcase-container">
            <div className="showcase-title">Professional projects</div>
            {professionalProjects}
            <div className="showcase-title">Personal projects</div>
            {personalProjects}
        </div>
    );
};

export default Showcase;