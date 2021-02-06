import React from 'react';
import Zoom from 'react-reveal/Zoom';

const MobileBio = (props) => {
    return (
        <div className={`mobile-biography ${props.selectedMenu === "film" ? "film-mobile-bio" : "dev-mobile-bio"}`}>

            {props.infoObject.map((statement, index) => {
                return(
                    <Zoom delay={90 * index} duration={500}>
                    <div className={`main-list-mobile ${props.selectedMenu === "film" ? "row-reversed" : ""}`}>
                    <span>{statement}</span>
                    <img src={props.bullet} alt="bullet point" />
                </div> 
                </Zoom>
                )
            })}
    </div>
    );
};

export default MobileBio;