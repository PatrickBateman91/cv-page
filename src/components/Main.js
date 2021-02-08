import React from 'react';
import UpperPart from './Top/UpperPart';
import MiddlePart from './Middle/MiddlePart';
import LowerPart from './Bottom/LowerPart';
import {useState} from 'react';

const Main = (props) => {
    const [activeCodepenHover, setActiveCodepenHover] = useState(false);
    const [activeFilmHover, setActiveFilmHover] = useState(false);
    const [hoverFilm, setHoverFilm] = useState("none");
    const [selectedMenu, setMenu] = useState('dev');
    const [whichCodepen, setWhichCodepen] = useState('none');
    const usingMobile = window.screen.width < 481;



    const handleNavbar = (e) => {
        if(e.target.innerHTML === "film"){
            setMenu('film');
        } else if(e.target.innerHTML === "dev"){
            setMenu('dev');
        }
    }

    const handleCodepenHover = (e) => {
        if(e.type === "mouseenter"){
            setActiveCodepenHover(true);
            setWhichCodepen(e.target.id);
        } else if(e.type === "mouseleave"){
            setActiveCodepenHover(false);
            setWhichCodepen('none');
        }
    }

    const handleFilmHover = (e) => {
       if(e.type === "mouseenter"){
           setActiveFilmHover(true);
           setHoverFilm(e.target.id);
       } else if(e.type === "mouseleave"){
        setActiveFilmHover(false);
        setHoverFilm('none');
    }
   }


        return (
            <div className="main-container">
                <UpperPart selectedMenu={selectedMenu} usingMobile={usingMobile}/>
                <MiddlePart
                activeCodepenHover={activeCodepenHover}
                activeHover={activeFilmHover}
                handleCodepenHover={handleCodepenHover}
                handleFilmHover={handleFilmHover} 
                handleNavbar={handleNavbar}
                hoverFilm={hoverFilm}
                selectedMenu={selectedMenu}
                usingMobile={usingMobile}
                whichCodepen={whichCodepen}
                />
               
                <LowerPart/>
            </div>
        );
}

export default Main;