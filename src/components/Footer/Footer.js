import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';

const LowerPart = (props) => {
    return (
        <div className="footer">
            <div className="go-down-icon-container">
                <a href="#scroll-to-header">
                    <FontAwesomeIcon inverse icon={faAngleDoubleUp} />
                </a>
            </div>
            <div className="disclaimer">
                Template design is not original, and was manually recreated from @ghstcode.
            </div>
        </div>
    );
};

export default LowerPart;