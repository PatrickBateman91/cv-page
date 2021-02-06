import React from 'react';
import MobileBio from '../Top/MobileBio';
import Bullet from '../../images/bullet.png';
import {filmBio_EN, devBio_EN} from '../TextObjects';

const MobileMenu = (props) => {
    return (
        <div className="middle-navbar-mobile-container" onClick={props.handleNavbar}>
            <div className="navbar-mobile-container">
                <div className={`navbar-option ${props.selectedMenu === "film" ? "selected-mobile-bar film-bar" : "dev-bar"}`}>
                    <span className={props.selectedMenu === "film" ? "highlighted" : ""}>film</span>
                </div>

                <div className={`navbar-option ${props.selectedMenu === "dev" ? "selected-mobile-bar" : ""}`}>
                    <span className={props.selectedMenu === "dev" ? "highlighted" : ""}>dev</span>
                </div>
            </div>

            <div className="mobile-info-container">
                <MobileBio 
                bullet={Bullet} 
                infoObject={props.selectedMenu === "film" ? filmBio_EN : devBio_EN}
                selectedMenu={props.selectedMenu}
                />
            </div>
        </div>
    );
};

export default MobileMenu;