import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';

const GoDownIcon = (props) => {
    return (
        <Fragment>
            {props.usingMobile ? null :
                <div className="go-down-icon-container">
                    <a href={props.positionIcon === "bottom" ? "#scroll-to-body" : "#scroll-to-header"}><FontAwesomeIcon inverse icon={props.positionIcon === "bottom" ? faAngleDoubleDown : faAngleDoubleUp} /></a>
                </div>}
        </Fragment>
    );
};

export default GoDownIcon;