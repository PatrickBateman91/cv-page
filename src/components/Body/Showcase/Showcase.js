import React from 'react';
import SingleProject from './SingleProject';
import projectsObject from './projectsObject';
import './styles.scss';

const Showcase = (props) => {
    const projectDiv = projectsObject.map(project => {
        return <SingleProject key={project.title} project={project} />;
    })
    return (
        <div className="showcase-container">
            <div className="showcase-title">Showcase</div>
            {projectDiv}
        </div>
    );
};

export default Showcase;