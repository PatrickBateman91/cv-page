import React from 'react';
import './styles.scss';

const MobileBody = (props) => {
    return (
        <div className="middle-navbar-mobile-container" id="scroll-to-body">
            <div className="navbar-mobile-container">
                <div className={`navbar-option ${props.selectedMenu === "film" ? "selected-mobile-bar film-bar" : "dev-bar"}`} onClick={props.handleNavbar.bind(this, "film")}>
                    <span className={props.selectedMenu === "film" ? "highlighted" : ""}>film</span>
                </div>

                <div className={`navbar-option ${props.selectedMenu === "dev" ? "selected-mobile-bar" : ""}`} onClick={props.handleNavbar.bind(this, "dev")}>
                    <span className={props.selectedMenu === "dev" ? "highlighted" : ""}>dev</span>
                </div>
            </div>
        </div>
    );
};

export default MobileBody;