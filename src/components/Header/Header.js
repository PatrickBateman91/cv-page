import React from 'react';
import { nameAndAge } from '../InfoObjects/MutualObjects';
import Bullet from '../../images/Icons/bullet.png';
import HeaderFilmBio from './HeaderFilmBio';
import HeaderDevBio from './HeaderDevBio';
import Portrait from '../../images/Portrait.jpg';
import './styles.scss';

const Header = (props) => {
  return (
    <div className="upper-container">
      {props.usingMobile ? null : <HeaderFilmBio bullet={Bullet} />}
      <div className="picture-container">
        <img src={Portrait} alt="Amar Spahić" />
        <div className="personal-info">
          <span>{nameAndAge}</span>
        </div>
      </div>
      {props.usingMobile ? null : <HeaderDevBio bullet={Bullet} />}
    </div>
  )
};

export default Header;