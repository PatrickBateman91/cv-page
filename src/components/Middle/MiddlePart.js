import React from 'react';
import DevBiography from './DevBiography';
import FilmBiography from './FilmBiography';
import MobileMenu from './MobileMenu';

const MiddlePart = (props) => {
    return (
        <div className="middle-container">
            {props.usingMobile ?
                <MobileMenu handleNavbar={props.handleNavbar} selectedMenu={props.selectedMenu} usingMobile={props.usingMobile}/>
                :
                <div className="middle-navbar" onClick={props.handleNavbar}>
                    <div className="navbar-option">
                        <span className={props.selectedMenu === "film" ? "highlighted" : ""}>film</span>
                    </div>

                    <div className="navbar-option">
                        <span className={props.selectedMenu === "dev" ? "highlighted" : ""}>dev</span>
                    </div>
                </div>
            }

            <div className="middle-body">
                {props.selectedMenu === "film" ?
                    <FilmBiography
                        activeHover={props.activeHover}
                        hoverFilm={props.hoverFilm}
                        handleFilmHover={props.handleFilmHover}
                        selectedMenu={props.selectedMenu}
                         />
                    :
                    <DevBiography
                        activeCodepenHover={props.activeCodepenHover}
                        handleCodepenHover={props.handleCodepenHover}
                        selectedMenu={props.selectedMenu}
                        whichCodepen={props.whichCodepen}
                    />}
            </div>
        </div>
    );
};

export default MiddlePart;