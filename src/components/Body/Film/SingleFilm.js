import React from 'react';
import './styles.scss';
const SingleFilm = (props) => {
    return (
        <div className="single-film-container">
            <div className="film-info">
                <ul className="secondary-list">
                    <li className="bold">{props.name}</li>
                    <li>{props.director}</li>
                    <li>{props.mainInfo}</li>
                    <li>{props.extraInfo}</li>
                </ul>
            </div>

            <div className="film-picture-container">
                <div className="film-picture">
                    <img src={props.imgSource} alt={props.imgAlt} id={props.name} onMouseEnter={props.handleFilmHover.bind(this, props.name)} />

                    <div className={`hover-hidden ${props.activeFilmHover && props.hoverFilm === props.name ? "info-shown" : "info-hidden"}`} onMouseLeave={props.handleFilmHover.bind(this, props.name)}>
                        <a href={props.externalLink} target="_blank" rel="noreferrer" className={props.externalLink === "TBD" ? "disable-href" : ""}>
                            {props.externalLink !== "TBD" ?
                                <img id="hover-external-icon" src={props.icon} alt="external" className="grow-with-delay" />
                                :
                                <span>No public info yet</span>}
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SingleFilm;