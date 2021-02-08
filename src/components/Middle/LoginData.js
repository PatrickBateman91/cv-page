import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import ExternalGoToIcon from '../../images/external-goto-icon.png';
import {betAppLoginData,  shopAppLoginData, betAppLoginTitle, shopAppLoginTitle} from '../TextObjects';

const LoginData = (props) => {

    let data, title;
    if(props.title === "Shoe shop"){
        data = shopAppLoginData;
        title = shopAppLoginTitle;
    } else{
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
        {<div className="visit-app">
                    <a href={props.title === "Shoe shop" ? "https://spaha-shopapp.netlify.app/" : "https://spaha-betapp.netlify.app/"} target="_blank" rel="noreferrer">
                        <span>Visit page</span>
                        <img src={ExternalGoToIcon} alt="go to external link" />
                        </a>
                 
                    </div>

        }
        </div>
    );
};

export default LoginData;