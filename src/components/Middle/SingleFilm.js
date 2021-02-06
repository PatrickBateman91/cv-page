import React from 'react';

const SingleFilm = (props) => {

    return (

                   <div className={`single-film-container`}>
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
                           <img src={props.imgSource} alt={props.imgAlt} id={props.name} onMouseEnter={props.handleFilmHover} />
       
                           <div className={`film-hidden ${props.activeHover && props.hoverFilm === props.name ? "info-shown" : "info-hidden"}`} onMouseLeave={props.handleFilmHover}>
       
                               {props.externalLink !== "TBD" ?
                                   <a href={props.externalLink} target="_blank" rel="noreferrer">
                                       <img id="hover-external-icon" src={props.icon} alt="external" className="grow-with-delay" />
                                   </a>
                                   :
                                   <span>No public info yet</span>}
       
                           </div>
                       </div>
                   </div>
               </div>

    );
};

export default SingleFilm;