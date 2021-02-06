import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-holder">

                <div className="contact-title">
                    <span>Contact</span>
                </div>

                <div className="contact-item">
                    <span>spahinho@gmail.com</span>
                    <div className=""><FontAwesomeIcon icon={faEnvelope} /></div>
                </div>

                <div className="contact-item">
                 <span>+387 61 414 045</span>
                    <div className=""><FontAwesomeIcon icon={faPhone} /></div>
                </div>
            </div>
        </div>
    );
};

export default Contact;