import React from 'react';
import { codepenTitles } from '../../InfoObjects/DevObjects';
import Codepen from './Codepen';
import './styles.scss';

const SmallerProjects = (props) => {
    const codepenDivs = codepenTitles.map(codepen => {
        return <Codepen app={codepen} key={codepen.title} />;
    })

    return (
        <div className="smaller-projects-container">
            <div className="smaller-projects-title">Smaller projects</div>
            <div className="codepen-container">
                {codepenDivs}
            </div>
        </div>
    );
};

export default SmallerProjects;