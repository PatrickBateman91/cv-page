import React from 'react';
import Bullet from '../../images/Icons/bullet.png';
import { devBio } from '../InfoObjects/DevObjects';
import { filmBio } from '../InfoObjects/FilmObjects';
import MobileBio from '../Header/MobileBio';
import './styles.scss';

const MobileBody = (props) => {
    return (
        <div className="middle-navbar-mobile-container">
            <div className="navbar-mobile-container">
                <div className={`navbar-option ${props.selectedMenu === "film" ? "selected-mobile-bar film-bar" : "dev-bar"}`} onClick={props.handleNavbar.bind(this, "film")}>
                    <span className={props.selectedMenu === "film" ? "highlighted" : ""}>film</span>
                </div>

                <div className={`navbar-option ${props.selectedMenu === "dev" ? "selected-mobile-bar" : ""}`} onClick={props.handleNavbar.bind(this, "dev")}>
                    <span className={props.selectedMenu === "dev" ? "highlighted" : ""}>dev</span>
                </div>
            </div>

            <div className="mobile-info-container">
                <MobileBio
                    bullet={Bullet}
                    infoObject={props.selectedMenu === "film" ? filmBio : devBio}
                    selectedMenu={props.selectedMenu}
                />
            </div>
        </div>
    );
};

export default MobileBody;