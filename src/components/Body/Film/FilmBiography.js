import React from 'react';
import Fade  from 'react-reveal/Fade';
import { featureLengthObject, shortsObject, myWorksObject, otherObject } from '../../InfoObjects/FilmObjects';
import SingleFilm from './SingleFilm';
import './styles.scss';

const FilmBiography = (props) => {

    return (
        <div className="film-container">
            <span className="category-title">Feature-length films</span>

            {featureLengthObject.map((movie, index) => {
                return (
                    <Fade
                        left={index % 2 === 0 ? true : false}
                        right={index % 2 === 0 ? false : true}
                        delay={120 * index}
                        duration={500}
                        key={movie.name}
                        triggerOnce
                    >
                        <SingleFilm
                            activeFilmHover={props.activeFilmHover}
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
            })}

            <span className="category-title">Shorts</span>

            {shortsObject.map((movie, index) => {
                return (
                    <Fade
                        left={index % 2 === 0 ? true : false}
                        right={index % 2 === 0 ? false : true}
                        delay={100 * index}
                        duration={500}
                        key={movie.name}
                        triggerOnce	>
                        <SingleFilm
                            activeFilmHover={props.activeFilmHover}
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

            })}

            <span className="category-title">Other</span>

            {otherObject.map((movie, index) => {
                return (
                    <Fade
                        left={index % 2 === 0 ? true : false}
                        right={index % 2 === 0 ? false : true}
                        delay={100 * index}
                        duration={500}
                        key={movie.name}
                        triggerOnce	>
                        <SingleFilm
                            activeFilmHover={props.activeFilmHover}
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
            })}

            <span className="category-title">My works</span>

            {myWorksObject.map((movie, index) => {
                return (
                    <Fade
                        left={index % 2 === 0 ? true : false}
                        right={index % 2 === 0 ? false : true}
                        delay={100 * index}
                        duration={500}
                        key={movie.name}
                        triggerOnce	>
                        <SingleFilm
                            activeFilmHover={props.activeFilmHover}
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
            })}
        </div>
    );
};

export default FilmBiography;