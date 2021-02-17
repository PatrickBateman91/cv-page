import React, { useState } from 'react';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import './App.scss';

const App = (props) => {
    const [positionIcon, setPosition] = useState('bottom');
    const [selectedMenu, setMenu] = useState('dev');
    const usingMobile = window.screen.width < 481;
    const windowHeight = window.screen.height;

    document.addEventListener('scroll', function (e) {
        if (document.documentElement.scrollTop > (windowHeight / 2)) {
            if (positionIcon === "bottom") {
                setPosition('top');
            }
        } else {
            if (positionIcon === "top") {
                setPosition('bottom');
            }
        }
    })

    return (
        <div className="main-container">
            <Header positionIcon={positionIcon} selectedMenu={selectedMenu} usingMobile={usingMobile} />
            <Body
                handleNavbar={setMenu}
                selectedMenu={selectedMenu}
                usingMobile={usingMobile}
            />
            <Footer />
        </div>
    );
}

export default App;
