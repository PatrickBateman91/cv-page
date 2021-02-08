import React from 'react';
import Pulse from 'react-reveal/Pulse';
import SingleApp from './SingleApp';
import Codepen from './Codepen';
import {betAppObject, shopAppObject} from '../TextObjects';

const DevBiography = (props) => {

    return (
        <div className="dev-biography-container">
            <Pulse>
                <SingleApp
                    infoObject={shopAppObject}
                    reduxUsed={true}
                    selectedMenu={props.selectedMenu}
                    title="Shoe shop"
                />
            </Pulse>
            <Pulse>
                <SingleApp
                    infoObject={betAppObject}
                    reduxUsed={false}
                    selectedMenu={props.selectedMenu}
                    title="Bet web-app"
                />
            </Pulse>
            <Pulse>
            <Codepen
                activeCodepenHover={props.activeCodepenHover}
                handleCodepenHover={props.handleCodepenHover}
                whichCodepen={props.whichCodepen}
            />
            </Pulse>
        </div>
    );
};

export default DevBiography;