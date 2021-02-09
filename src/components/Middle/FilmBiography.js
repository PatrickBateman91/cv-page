import React from 'react';
import {Fade} from 'react-reveal';
import {featureLengthObject, shortsObject, myWorksObject, otherObject} from '../TextObjects';
import SingleFilm from './SingleFilm';

const FilmBiography = (props) => {

    return (
        <div className="film-container">
            <span className="category-title">Feature-length films</span>

            {featureLengthObject.map((movie, index) => {
              // ovaj citav fazon gdje gledas parne i neparne iteme si mogao bolje hendlati, umjesto da returnas 
              // skroz drugi sadrzaj na osnovu parnog/neparnog broja, mogao si returnati uvijek istu komponentu ali
              // joj davati drugaciji prop u ovisnosti o tome jel parni ili neparni, ponavljas ovaj kod dzaba,
              // -- DON'T REPEAT YOURSELF --
                if(index % 2 === 0){
                    return (
                        <Fade 
                        left
                        delay={120 * index}
                        duration={500}
                        key={movie.name}
                        >
                          {/* 
                          
                            ove indentacije nisu dobRe, uvijek to pazi, ne mogu ti dovoljno naglasiti vaznost cistog koda,
                            koristi neki linter i na kraju krajeva imas autoformattere koji ti srede fino sve
                            ali bolje da se ne oslanjas jos na njih dok ti ne postane navika da sam fino formatiras kod

                          */}
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
                        // prosljedjujes puno propova ovoj komponenti, kad vidis da se ovako zakomplikovalo
                        // a trebas renderati listu bilo cega, onda oko te liste napravi wrapper koji drzi u sebi podatke
                        // i onda unutar tog wrappera pozivaj .map() i nemoj ici preduboko sa prosljedjivanjem propova

                        // ako vidis da moras kroz 3+ nivoa proslijediti neki prop, onda je vrijeme za globalni store
                        // (redux library ili built-in react hooks), jer oni mogu zaobici nivoe dubine
                        // i doamh dati duboko nestovanoj komponenti ono sto joj treba
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
                    </Fade> //indentacije, mora closing tag biti na istom nivou indentacije kao opening tag
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
                              if(index % 2 === 0){ //opet indentacija, samo jedan tab indentacije za funkciju
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