import React from 'react';
import {Fade} from 'react-reveal';
import {featureLengthObject, shortsObject, myWorksObject, otherObject} from '../TextObjects';
import SingleFilm from './SingleFilm';

const FilmBiography = (props) => {

    return (
        <div className="film-container">
            <span className="category-title">Feature-length films</span>

            {featureLengthObject.map((movie, index) => {
                if(index % 2 === 0){
                    return (
                        <Fade 
                        left
                        delay={120 * index}
                        duration={500}
                        key={movie.name}
                        >
                        <SingleFilm
                        activeHover={props.activeHover}
                        director={movie.director}
                        extraInfo={movie.extraInfo}
                        externalLink={movie.externalLink}
                        handleFilmHover={props.handleFilmHover}
                        hoverFilm={props.hoverFilm}
                        imgAlt={movie.imgAlt}
                        imgSource={movie.imgSource}
                        icon={movie.icon}
                        index={index}
                        key={movie.imgAlt}
                        name={movie.name}
                        mainInfo={movie.mainInfo}
                    />
                    </Fade>
                    )
                } else{
                    return (
                        <Fade 
                        right
                        delay={120 * index}
                        duration={500}
                        key={movie.name}
                        >
                        <SingleFilm
                        activeHover={props.activeHover}
                        director={movie.director}
                        extraInfo={movie.extraInfo}
                        externalLink={movie.externalLink}
                        handleFilmHover={props.handleFilmHover}
                        hoverFilm={props.hoverFilm}
                        imgAlt={movie.imgAlt}
                        imgSource={movie.imgSource}
                        icon={movie.icon}
                        index={index}
                        key={movie.imgAlt}
                        name={movie.name}
                        mainInfo={movie.mainInfo}
                    />
                    </Fade>
                    )
                }

                
            })}

            <span className="category-title">Shorts</span>

            {shortsObject.map((movie, index) => {
                if(index % 2 === 0){
                    return (
                        <Fade 
                        left  
                        delay={100 * index}
                        duration={500}
                        key={movie.name}>
                        <SingleFilm
                        activeHover={props.activeHover}
                        director={movie.director}
                        extraInfo={movie.extraInfo}
                        externalLink={movie.externalLink}
                        handleFilmHover={props.handleFilmHover}
                        hoverFilm={props.hoverFilm}
                        imgAlt={movie.imgAlt}
                        imgSource={movie.imgSource}
                        icon={movie.icon}
                        index={index}
                        key={movie.imgAlt}
                        name={movie.name}
                        mainInfo={movie.mainInfo}
                    />
                    </Fade>
                    )
                } else{
                    return (
                        <Fade 
                        right  
                        delay={100 * index}
                        duration={500}
                        key={movie.name}>
                        <SingleFilm
                        activeHover={props.activeHover}
                        director={movie.director}
                        extraInfo={movie.extraInfo}
                        externalLink={movie.externalLink}
                        handleFilmHover={props.handleFilmHover}
                        hoverFilm={props.hoverFilm}
                        imgAlt={movie.imgAlt}
                        imgSource={movie.imgSource}
                        icon={movie.icon}
                        index={index}
                        key={movie.imgAlt}
                        name={movie.name}
                        mainInfo={movie.mainInfo}
                    />
                    </Fade>
                    )
                }
            })}

            <span className="category-title">Other</span>

            {otherObject.map((movie, index) => {
                              if(index % 2 === 0){
                                return (
                                    <Fade 
                                    left  
                                    delay={100 * index}
                                    duration={500}
                                    key={movie.name}>
                                    <SingleFilm
                                    activeHover={props.activeHover}
                                    director={movie.director}
                                    extraInfo={movie.extraInfo}
                                    externalLink={movie.externalLink}
                                    handleFilmHover={props.handleFilmHover}
                                    hoverFilm={props.hoverFilm}
                                    imgAlt={movie.imgAlt}
                                    imgSource={movie.imgSource}
                                    icon={movie.icon}
                                    index={index}
                                    key={movie.imgAlt}
                                    name={movie.name}
                                    mainInfo={movie.mainInfo}
                                />
                                </Fade>
                                )
                            } else{
                                return (
                                    <Fade 
                                    right 
                                    delay={100 * index}
                                    duration={500}
                                    key={movie.name}>
                                    <SingleFilm
                                    activeHover={props.activeHover}
                                    director={movie.director}
                                    extraInfo={movie.extraInfo}
                                    externalLink={movie.externalLink}
                                    handleFilmHover={props.handleFilmHover}
                                    hoverFilm={props.hoverFilm}
                                    imgAlt={movie.imgAlt}
                                    imgSource={movie.imgSource}
                                    icon={movie.icon}
                                    index={index}
                                    key={movie.imgAlt}
                                    name={movie.name}
                                    mainInfo={movie.mainInfo}
                                />
                                </Fade>
                                )
                            }
            })}

            <span className="category-title">My works</span>

            {myWorksObject.map((movie, index) => {
                if(index % 2 === 0){
                    return (
                        <Fade 
                        left 
                        delay={100 * index}
                        duration={500}
                        key={movie.name}>
                        <SingleFilm
                        activeHover={props.activeHover}
                        director={movie.director}
                        extraInfo={movie.extraInfo}
                        externalLink={movie.externalLink}
                        handleFilmHover={props.handleFilmHover}
                        hoverFilm={props.hoverFilm}
                        imgAlt={movie.imgAlt}
                        imgSource={movie.imgSource}
                        icon={movie.icon}
                        index={index}
                        key={movie.imgAlt}
                        name={movie.name}
                        mainInfo={movie.mainInfo}
                    />
                    </Fade>
                    )
                } else{
                    return (
                        <Fade 
                        right 
                        delay={100 * index}
                        duration={500}
                        key={movie.name}>
                        <SingleFilm
                        activeHover={props.activeHover}
                        director={movie.director}
                        extraInfo={movie.extraInfo}
                        externalLink={movie.externalLink}
                        handleFilmHover={props.handleFilmHover}
                        hoverFilm={props.hoverFilm}
                        imgAlt={movie.imgAlt}
                        imgSource={movie.imgSource}
                        icon={movie.icon}
                        index={index}
                        key={movie.imgAlt}
                        name={movie.name}
                        mainInfo={movie.mainInfo}
                    />
                    </Fade>
                    )
                }
            })}
        </div>
    );
};

export default FilmBiography;