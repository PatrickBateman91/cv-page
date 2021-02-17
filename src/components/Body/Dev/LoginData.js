import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { betAppLoginData, shopAppLoginData, betAppLoginTitle, shopAppLoginTitle } from '../../InfoObjects/DevObjects';
import Pulse from 'react-reveal/Pulse';
import ExternalLink from '../../../images/Icons/external-goto-icon.png';
import './styles.scss';

const LoginData = (props) => {
    let data, title;
    if (props.title === "CV PROJECT #1 - Shoe shop") {
        data = shopAppLoginData;
        title = shopAppLoginTitle;
    } else {
        data = betAppLoginData;
        title = betAppLoginTitle;
    }
    const loginDataDiv = data.map(item => {
        return (
            <div key={item.email}>
                <div className="login-data-item">
                    <input type="text" id={item.email} className="copy-item" readOnly={true} value={item.email} />
                    <div className=""><FontAwesomeIcon icon={faCopy} onClick={e => props.handleCopy(e, item.email, item.email)} /></div>
                </div>

                <div className="login-data-item">
                    <input type="text" id={`${item.password}-${item.email}`} className="copy-item" readOnly={true} value={item.password} />
                    <FontAwesomeIcon icon={faCopy} onClick={e => props.handleCopy(e, `${item.password}-${item.email}`, item.password)} />
                </div>
            </div>
        )
    })
    return (
        <div className="login-data-container">
            <div className="login-data-title">{title}</div>
            <div className="login-data-body">{loginDataDiv}</div>
            {<Pulse delay={500}>
                <div className="visit-app">
                    <a href={props.title === "CV PROJECT #1 - Shoe shop" ? "https://spaha-shopapp.netlify.app/" : "https://spaha-betapp.netlify.app/"} target="_blank" rel="noreferrer">
                        <span>Visit page</span>
                        <img src={ExternalLink} alt="go to external link" />
                    </a>
                </div>
            </Pulse>
            }
        </div>
    );
};

export default LoginData;