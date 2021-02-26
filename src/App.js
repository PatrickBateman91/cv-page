import React, { useState } from 'react';
import Biography from './components/Body/Biography/Biography';
import Footer from './components/Footer/Footer';
import Front from './components/Body/Front/Front';
import Header from './components/Header/Header';
import Showcase from './components/Body/Showcase/Showcase';
import SmallerProjects from './components/Body/SmallerProjects/SmallerProjects';
import Skills from './components/Body/Skills/Skills';
import './App.scss';

const App = (props) => {
    const [positionIcon, setPosition] = useState('bottom');
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
            <div className="main-holder">
                <Header />
                <Front positionIcon={positionIcon}/>
                <Skills />
                <Showcase />
                <SmallerProjects />
                <Biography />
                <Footer />
            </div>
        </div>
    );
}

export default App;
