import React from 'react';
import CodepenIcon from '../../../images/Icons/codepen-icon.png'
import GithubIcon from '../../../images/Icons/github-icon.png';
import ImdbIcon from '../../../images/Icons/imdb-icon.png';
import LinkedInIcon from '../../../images/Icons/linkedin-icon.png'
import './styles.scss';

const Icons = (props) => {
    return (
        <div className="icon-holder">
            <div className="left-icons">
                <div>
                    <a href="https://github.com/PatrickBateman91" target="_blank" rel="noreferrer">
                        <img src={GithubIcon} alt="Github icon" />
                    </a>
                </div>
            </div>

            <div className="right-icons">

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

                <div>
                    <a href="https://www.imdb.com/name/nm8348558/?ref_=nv_sr_srsg_0" target="_blank" rel="noreferrer">
                        <img src={ImdbIcon} alt="IMDB icon" />
                    </a>
                </div>

            </div>
        </div>
    );
};

export default Icons;