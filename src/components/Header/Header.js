import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown, faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import Slide from 'react-reveal/Slide';
import AboutMe from './AboutMe/AboutMe';
import Portrait from '../../images/Portrait.jpg';
import './styles.scss';

const Header = (props) => {
  return (
    <Fragment>
      <div className="upper-container" id="scroll-to-header">
        <div className="portrait-container">
          <Slide left><img src={Portrait} alt="Amar Spahić" /></Slide>
        </div>
        <div className="about-me-container">
          <AboutMe />
        </div>
      </div>
      {props.usingMobile ? null :
        <div className="header-icon-container">
          <a href={props.positionIcon === "bottom" ? "#scroll-to-body" : "#scroll-to-header"}><FontAwesomeIcon icon={props.positionIcon === "bottom" ? faArrowCircleDown : faArrowCircleUp} /></a>
        </div>}

    </Fragment>
  )
};

export default Header;