import React from 'react';
import { Zoom } from 'react-awesome-reveal';
import { devBio } from '../InfoObjects/DevObjects';
import './styles.scss';

const HeaderDevBio = (props) => {
    return (
        <div className="dev-short-biography">
            {devBio.map((statement, index) => {

                return (
                    <Zoom delay={90 * index} direction="top" duration={500} key={statement} triggerOnce>
                        <div className="main-list-dev">
                            <img src={props.bullet} alt="bullet point" />
                            <span>{statement}</span>
                        </div>
                    </Zoom>
                )
            })}
        </div>
    );
};

export default HeaderDevBio;