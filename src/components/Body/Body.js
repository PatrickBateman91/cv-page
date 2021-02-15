import React, { useState } from 'react';
import FilmBiography from './Film/FilmBiography';
import DevBiography from './Dev/DevBiography';
import MobileBody from './MobileBody';
import './styles.scss';

const Body = (props) => {
    const [activeCodepenHover, setActiveCodepenHover] = useState(false);
    const [activeFilmHover, setActiveFilmHover] = useState(false);
    const [hoverFilm, setHoverFilm] = useState("none");
    const [whichCodepen, setWhichCodepen] = useState('none');

    const handleCodepenHover = (whichCodepen, e) => {
        if (e.type === "mouseenter") {
            setActiveCodepenHover(true);
            setWhichCodepen(whichCodepen);
        } else if (e.type === "mouseleave") {
            setActiveCodepenHover(false);
            setWhichCodepen('none');
        }
    }

    const handleFilmHover = (whichFilm, e) => {
        if (e.type === "mouseenter") {
            setActiveFilmHover(true);
            setHoverFilm(whichFilm);
        } else if (e.type === "mouseleave") {
            setActiveFilmHover(false);
            setHoverFilm('none');
        }
    }

    return (
        <div className="middle-container">
            {props.usingMobile ?
                <MobileBody handleNavbar={props.handleNavbar} selectedMenu={props.selectedMenu} usingMobile={props.usingMobile} />
                :
                <div className="middle-navbar">
                    <div className="navbar-option" onClick={props.handleNavbar.bind(this, "film")}>
                        <span className={props.selectedMenu === "film" ? "highlighted" : ""}>film</span>
                    </div>

                    <div className="navbar-option" onClick={props.handleNavbar.bind(this, "dev")}>
                        <span className={props.selectedMenu === "dev" ? "highlighted" : ""}>dev</span>
                    </div>
                </div>
            }

            <div className="middle-body">
                {props.selectedMenu === "film" ?
                    <FilmBiography
                        activeFilmHover={activeFilmHover}
                        hoverFilm={hoverFilm}
                        handleFilmHover={handleFilmHover}
                        selectedMenu={props.selectedMenu}
                    />
                    :
                    <DevBiography
                        activeCodepenHover={activeCodepenHover}
                        handleCodepenHover={handleCodepenHover}
                        selectedMenu={props.selectedMenu}
                        whichCodepen={whichCodepen}
                    />}
            </div>
        </div>
    );
};

export default Body;