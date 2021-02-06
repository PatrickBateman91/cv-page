import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

const LoginData = (props) => {
    const loginDataDiv = props.data.map(item => {
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
            <div className="login-data-title">{props.title}</div>
            <div className="login-data-body">{loginDataDiv}</div>
        </div>
    );
};

export default LoginData;