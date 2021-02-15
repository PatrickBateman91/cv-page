import React from 'react';
import { betAppObject, shopAppObject } from '../../InfoObjects/DevObjects';
import Codepen from './Codepen';
import SingleApp from './SingleApp';
import './styles.scss';

const DevBiography = (props) => {
    return (
        <div className="dev-biography-container">
            <SingleApp
                infoObject={shopAppObject}
                reduxUsed={true}
                selectedMenu={props.selectedMenu}
                title="CV PROJECT #1 - Shoe shop"
            />

            <SingleApp
                infoObject={betAppObject}
                reduxUsed={false}
                selectedMenu={props.selectedMenu}
                title="CV PROJECT #2 - Bet web-app"
            />

            <Codepen
                activeCodepenHover={props.activeCodepenHover}
                handleCodepenHover={props.handleCodepenHover}
                whichCodepen={props.whichCodepen}
            />
        </div>
    );
};

export default DevBiography;