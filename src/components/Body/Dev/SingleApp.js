import React from 'react';
import Bets1 from '../../../images/Dev/bets1.jpg';
import Bets2 from '../../../images/Dev/bets2.jpg';
import Bets3 from '../../../images/Dev/bets3.jpg';
import D3 from '../../../images/Icons/d3-icon.png';
import ExpressIcon from '../../../images/Icons/express-icon.png';
import LoginData from './LoginData';
import MongoIcon from '../../../images/Icons/mongo-icon.png';
import NodeIcon from '../../../images/Icons/node-icon.png';
import ReactIcon from '../../../images/Icons/react-icon.png';
import ReduxIcon from '../../../images/Icons/redux-icon.png';
import Shop1 from '../../../images/Dev/shop1.jpg';
import Shop2 from '../../../images/Dev/shop2.jpg';
import Shop3 from '../../../images/Dev/shop3.jpg';
import  Zoom  from 'react-reveal/Zoom';
import './styles.scss';

const SingleApp = (props) => {

    const handleCopy = (e, id, value) => {
        e.stopPropagation();

        const copyId = document.getElementById(id);
        copyId.select();
        document.execCommand('Copy');
        copyId.value = "Copied";

        copyId.style.backgroundColor = "#aaf7b6";
        setTimeout(() => {
            copyId.value = value;
            copyId.style.backgroundColor = "#eadac5";
        }, 1000)
    }

    return (
        <div className="single-app-container">
            <div className="single-app-title">{props.title}</div>
            <div className="apps-used-container">
                <img src={MongoIcon} alt="Mongo" />
                <img src={ReactIcon} alt="React" />
                <img src={ExpressIcon} alt="Express" />
                <img src={NodeIcon} alt="Node" />
                {props.reduxUsed ? <img src={ReduxIcon} alt="Redux" /> : null}
                <img src={D3} alt="d3" />
            </div>

            <div className="single-app-info-container">
                <div>
                    <ul>
                        {props.infoObject.leftLi.map((item, index) => {
                            return (
                                <Zoom delay={100 * index} key={index}>
                                    <li key={item}>{item}</li>
                                </Zoom>
                            )
                        })}
                    </ul>
                </div>

                <div>
                    <ul>
                        {props.infoObject.middleLi.map((item, index) => {
                            return (
                                <Zoom delay={400 + (100 * index)} key={index}>
                                    <li key={item}>{item}</li>
                                </Zoom>)
                        })}
                    </ul>
                </div>

                <div>
                    <ul>
                        {props.infoObject.rightLi.map((item, index) => {
                            return (
                                <Zoom delay={600 + (100 * index)} key={index}>
                                    <li key={item}>{item}</li>
                                </Zoom>
                            )
                        })}
                    </ul>
                </div>
            </div>

            {props.title === "CV PROJECT #1 - Shoe shop" ? <div className="single-app-picture-container">
                <a href="https://spaha-shopapp.netlify.app/" target="_blank" rel="noreferrer"><img src={Shop1} alt="Home page" /></a>
                <a href="https://spaha-shopapp.netlify.app/" target="_blank" rel="noreferrer"><img src={Shop2} alt="Cart" /></a>
                <a href="https://spaha-shopapp.netlify.app/" target="_blank" rel="noreferrer"><img src={Shop3} alt="Admin stats" /></a>
            </div>
                :
                <div className="single-app-picture-container">
                    <a href="https://spaha-betapp.netlify.app/" target="_blank" rel="noreferrer"><img src={Bets1} alt="Manage bets" /></a>
                    <a href="https://spaha-betapp.netlify.app/" target="_blank" rel="noreferrer"><img src={Bets2} alt="Public profile" /></a>
                    <a href="https://spaha-betapp.netlify.app/" target="_blank" rel="noreferrer"><img src={Bets3} alt="Active bets" /></a>
                </div>}
            <LoginData
                handleCopy={handleCopy}
                selectedMenu={props.selectedMenu}
                title={props.title}
            />
        </div>
    );
};

export default SingleApp;