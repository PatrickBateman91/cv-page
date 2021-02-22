import React from 'react';
import CodepenIcon from '../../images/Icons/codepen-icon.png';
import Contact from './Contact';
import GithubIcon from '../../images/Icons/github-icon.png';
import ImdbIcon from '../../images/Icons/imdb-icon.png';
import LinkedInIcon from '../../images/Icons/linkedin-icon.png';
import './styles.scss';

const LowerPart = (props) => {
    return (
        <div className="lower-container" onClick={props.handleRedirect}>
            <Contact />
            <div className="lower-holder">

                <div>
                    <a href="https://github.com/PatrickBateman91" target="_blank" rel="noreferrer">
                        <img src={GithubIcon} alt="Github icon" />
                    </a>
                </div>
                <div>
                    <a href="https://www.imdb.com/name/nm8348558/?ref_=nv_sr_srsg_0" target="_blank" rel="noreferrer">
                        <img src={ImdbIcon} alt="IMDB icon" />
                    </a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/amar-spahic" target="_blank" rel="noreferrer">
                        <img src={LinkedInIcon} alt="Linked in icon" />
                    </a>
                </div>
                <div>
                    <a href="https://codepen.io/PatrickBateman92" target="_blank" rel="noreferrer">
                        <img src={CodepenIcon} alt="Codepen icon" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LowerPart;