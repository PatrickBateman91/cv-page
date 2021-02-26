import React from 'react';
import Icons from './ExternalSources/Icons';
import './styles.scss';

const Header = (props) => {
  return (
    <div className="header-container" id="scroll-to-header">
      <div className="icon-container">
        <Icons />
      </div>
    </div>
  )
};

export default Header;