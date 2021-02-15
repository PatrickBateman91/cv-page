import React, { useState } from 'react';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import './App.scss';

const App = (props) => {
    const [selectedMenu, setMenu] = useState('dev');
    const usingMobile = window.screen.width < 481;
 
    return (
        <div className="main-container">
            <Header selectedMenu={selectedMenu} usingMobile={usingMobile} />
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
