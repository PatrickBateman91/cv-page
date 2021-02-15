import React from 'react';
import { Zoom } from 'react-awesome-reveal';
import './styles.scss';

const MobileBio = (props) => {
    return (
        <div className={`mobile-biography ${props.selectedMenu === "film" ? "film-mobile-bio" : "dev-mobile-bio"}`}>
            {props.infoObject.map((statement, index) => {
                return (
                    <Zoom delay={90 * index} duration={500} triggerOnce	>
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