import React from 'react';
import UpperFilmBio from './UpperFilmBio';
import UpperDevBio from './UpperDevBio';
import {nameAndAge_EN} from '../TextObjects';
import RepresentationalPicture from '../../images/My picture.jpg';
import Bullet from '../../images/bullet.png';

const UpperPart = (props) => {

    return(
      <div className="upper-container">
        {props.usingMobile ? null : <UpperFilmBio bullet={Bullet} />}
      <div className="picture-container">
          <img src={RepresentationalPicture} alt="Amar Spahić" />
          <div className="personal-info">
              <span>{nameAndAge_EN}</span>
          </div>
      </div>

        {props.usingMobile ? null :    <UpperDevBio bullet={Bullet} />  }
  </div>
    )
};

export default UpperPart;