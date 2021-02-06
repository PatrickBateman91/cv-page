import React from 'react';
import {codepenTitles_EN} from '../TextObjects';
import PigDiceGame from '../../images/PigDiceGame.jpg';
import SimonSays from '../../images/SimonSays.PNG';
import SmoothCalculator from '../../images/SmoothCalculator.jpg';
import TicTacToe from '../../images/TicTacToe.jpg';
import JavascriptIcon from '../../images/javascript-icon.png';
import jQueryIcon from '../../images/jquery-icon.png';
import CodepenIcon from '../../images/codepen-icon.png';

const Codepen = (props) => {
    return (
        <div className="single-app-container">
        <div className="single-app-title">{codepenTitles_EN.mainTitle}</div>
        <div className="apps-used-container">
                <img src={JavascriptIcon} alt="Javascript" />
                <img src={jQueryIcon} alt="jQuery" />
            </div>

        <div className="codepen-container">

        <div className="single-codepen-app">
                <div className="codepen-title">{codepenTitles_EN.title1}</div>
                <div className="codepen-image-container">
                <img src={TicTacToe} alt="Tic Tac Toe" id="TicTacToe" onMouseEnter={props.handleCodepenHover}/>
                <div className={`film-hidden ${props.activeCodepenHover && props.whichCodepen === "TicTacToe" ? "info-shown" : "info-hidden"}`} onMouseLeave={props.handleCodepenHover}> 
                <a href="https://codepen.io/PatrickBateman92/full/REjBJd" target="_blank" rel="noreferrer">
               <img src={CodepenIcon} alt="codepen" className="codepen-external"/>
               </a>
                </div>
                </div>
            </div>

            <div className="single-codepen-app">
                <div className="codepen-title">{codepenTitles_EN.title2}</div>
               <div className="codepen-image-container">
               <img src={SmoothCalculator} alt="Calculator" id="SmoothCalculator"  onMouseEnter={props.handleCodepenHover}/>
               <div className={`film-hidden ${props.activeCodepenHover && props.whichCodepen === "SmoothCalculator" ? "info-shown" : "info-hidden"}`} onMouseLeave={props.handleCodepenHover}> 
                <a href="https://codepen.io/PatrickBateman92/full/qQyydX" target="_blank" rel="noreferrer">
               <img src={CodepenIcon} alt="codepen" className="codepen-external"/>
               </a>
                </div>
               </div>
            </div>

            <div className="single-codepen-app">
                <div className="codepen-title">{codepenTitles_EN.title3}</div>
                <div className="codepen-image-container">
                <img src={PigDiceGame} alt="Pig dice game" id="PigDiceGame"  onMouseEnter={props.handleCodepenHover}/>
                <div className={`film-hidden ${props.activeCodepenHover && props.whichCodepen === "PigDiceGame" ? "info-shown" : "info-hidden"}`} onMouseLeave={props.handleCodepenHover}> 
                <a href="https://codepen.io/PatrickBateman92/full/zyxPRO" target="_blank" rel="noreferrer">
               <img src={CodepenIcon} alt="codepen" className="codepen-external"/>
               </a>
                </div>
            </div>
            </div>

            <div className="single-codepen-app">
                <div className="codepen-title">{codepenTitles_EN.title4}</div>
                <div className="codepen-image-container">
                <img src={SimonSays} alt="Simon says" id="SimonSays" onMouseEnter={props.handleCodepenHover} />
                <div className={`film-hidden ${props.activeCodepenHover && props.whichCodepen === "SimonSays" ? "info-shown" : "info-hidden"}`} onMouseLeave={props.handleCodepenHover}> 
                <a href="https://codepen.io/PatrickBateman92/full/REagXN" target="_blank" rel="noreferrer">
               <img src={CodepenIcon} alt="codepen" className="codepen-external"/>
               </a>
                </div>
                </div>
            </div>
        </div>

        </div>
    );
};

export default Codepen;