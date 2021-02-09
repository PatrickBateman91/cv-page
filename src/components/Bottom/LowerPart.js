import React from 'react';
import Contact from './Contact';
import LinkedIn from '../../images/linkedin-icon.png';
import Github from '../../images/github-icon.png';
import Codepen from '../../images/codepen-icon.png';
import Imdb from '../../images/imdb-icon.png'

const LowerPart = (props) => {
    return (
        <div className="lower-container" onClick={props.handleRedirect}>
                    <Contact /> 
                    {/* indentacija */}
            <div className="lower-holder">

            <div>
                <a href="https://github.com/PatrickBateman91" target="_blank" rel="noreferrer">
                <img src={Github} alt="Github icon" /> 
                {/* indentacija, svaki child element uvijek jedan nivo indentacije, vjeruj mi spasi sebe pakla odrzavanja lose formatiranog koda */}
                </a>
            </div>
            <div>
              <a href="https://www.imdb.com/name/nm8348558/?ref_=nv_sr_srsg_0" target="_blank" rel="noreferrer">
              <img src={Imdb} alt="IMDB icon" />
              </a>
            </div>
            <div>
                <a href="https://ba.linkedin.com/in/amar-spahi%C4%87-548308123" target="_blank" rel="noreferrer">
                <img src={LinkedIn} alt="Linked in icon" />
                </a>
            </div>
            <div>
                <a href="https://codepen.io/PatrickBateman92" target="_blank" rel="noreferrer">
                <img src={Codepen} alt="Codepen icon" />
                </a>
            </div>
            </div> 
            {/* kad vidis ovako dva closing taga na istom nivou odmah znas da indentacija ne valja */}
        </div>
    );
};

export default LowerPart;