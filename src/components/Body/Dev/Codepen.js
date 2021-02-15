import React from 'react';
import { codepenTitles } from '../../InfoObjects/DevObjects';
import CodepenIcon from '../../../images/Icons/codepen-icon.png';
import JavascriptIcon from '../../../images/Icons/javascript-icon.png';
import JQueryIcon from '../../../images/Icons/jquery-icon.png';
import PigDiceGame from '../../../images/Dev/PigDiceGame.jpg';
import SimonSays from '../../../images/Dev/SimonSays.PNG';
import SmoothCalculator from '../../../images/Dev/SmoothCalculator.jpg';
import TicTacToe from '../../../images/Dev/TicTacToe.jpg';
import './styles.scss';

const Codepen = (props) => {
    return (
        <div className="single-app-container">
            <div className="single-app-title">{codepenTitles.mainTitle}</div>
            <div className="apps-used-container">
                <img src={JavascriptIcon} alt="Javascript" />
                <img src={JQueryIcon} alt="jQuery" />
            </div>

            <div className="codepen-container">

                <div className="single-codepen-app">
                    <div className="codepen-title">{codepenTitles.title1}</div>
                    <div className="codepen-image-container">
                        <img src={TicTacToe} alt="Tic Tac Toe" id="TicTacToe" onMouseEnter={props.handleCodepenHover.bind(this, "TicTacToe")} />
                        <div className={`hover-hidden ${props.activeCodepenHover && props.whichCodepen === "TicTacToe" ? "info-shown" : "info-hidden"}`} onMouseLeave={props.handleCodepenHover.bind(this, "TicTacToe")}>
                            <a href="https://codepen.io/PatrickBateman92/full/REjBJd" target="_blank" rel="noreferrer">
                                <img src={CodepenIcon} alt="codepen" className="codepen-external" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="single-codepen-app">
                    <div className="codepen-title">{codepenTitles.title2}</div>
                    <div className="codepen-image-container">
                        <img src={SmoothCalculator} alt="Calculator" id="SmoothCalculator" onMouseEnter={props.handleCodepenHover.bind(this, "SmoothCalculator")} />
                        <div className={`hover-hidden ${props.activeCodepenHover && props.whichCodepen === "SmoothCalculator" ? "info-shown" : "info-hidden"}`} onMouseLeave={props.handleCodepenHover.bind(this, "SmoothCalculator")}>
                            <a href="https://codepen.io/PatrickBateman92/full/qQyydX" target="_blank" rel="noreferrer">
                                <img src={CodepenIcon} alt="codepen" className="codepen-external" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="single-codepen-app">
                    <div className="codepen-title">{codepenTitles.title3}</div>
                    <div className="codepen-image-container">
                        <img src={PigDiceGame} alt="Pig dice game" id="PigDiceGame" onMouseEnter={props.handleCodepenHover.bind(this, "PigDiceGame")} />
                        <div className={`hover-hidden ${props.activeCodepenHover && props.whichCodepen === "PigDiceGame" ? "info-shown" : "info-hidden"}`} onMouseLeave={props.handleCodepenHover.bind(this, "PigDiceGame")}>
                            <a href="https://codepen.io/PatrickBateman92/full/zyxPRO" target="_blank" rel="noreferrer">
                                <img src={CodepenIcon} alt="codepen" className="codepen-external" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="single-codepen-app">
                    <div className="codepen-title">{codepenTitles.title4}</div>
                    <div className="codepen-image-container">
                        <img src={SimonSays} alt="Simon says" id="SimonSays" onMouseEnter={props.handleCodepenHover.bind(this, "SimonSays")} />
                        <div className={`hover-hidden ${props.activeCodepenHover && props.whichCodepen === "SimonSays" ? "info-shown" : "info-hidden"}`} onMouseLeave={props.handleCodepenHover.bind(this, "SimonSays")}>
                            <a href="https://codepen.io/PatrickBateman92/full/REagXN" target="_blank" rel="noreferrer">
                                <img src={CodepenIcon} alt="codepen" className="codepen-external" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Codepen;