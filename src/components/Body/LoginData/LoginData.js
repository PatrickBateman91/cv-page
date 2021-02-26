import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';

const LoginData = (props) => {

    return (
        <div className="login-data-container">
            <div className="login-data-title">{props.data.title}</div>
            <div className="login-data-body">
                <div className="login-data-item">
                    <input type="text" id={props.data.email} className="copy-item" readOnly={true} value={props.data.email} />
                    <div className=""><FontAwesomeIcon icon={faCopy} onClick={e => props.handleCopy(e, props.data.email, props.data.email)} /></div>
                </div>

                <div className="login-data-item">
                    <input type="text" id={`${props.data.password}-${props.data.email}`} className="copy-item" readOnly={true} value={props.data.password} />
                    <FontAwesomeIcon icon={faCopy} onClick={e => props.handleCopy(e, `${props.data.password}-${props.data.email}`, props.data.password)} />
                </div>
            </div>
        </div>
    );
};

export default LoginData;