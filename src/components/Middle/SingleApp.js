import React from 'react';
import Zoom from 'react-reveal/Zoom';
import LoginData from './LoginData';
import {betAppLoginData,  shopAppLoginData, betAppLoginTitle, shopAppLoginTitle} from '../TextObjects';
import ExternalGoToIcon from '../../images/external-goto-icon.png';
import ReactIcon from '../../images/react-icon.png';
import NodeIcon from '../../images/node-icon.png';
import ReduxIcon from '../../images/redux-icon.png';
import MongoIcon from '../../images/mongo-icon.png';
import ExpressIcon from '../../images/express-icon.svg';
import D3Icon from '../../images/d3-icon.svg';
import Bets1 from '../../images/bets1.jpg';
import Bets3 from '../../images/bets3.jpg';
import Bets2Alt from '../../images/bets2alt.jpg';
import Shop1 from '../../images/shop1.jpg';
import Shop2 from '../../images/shop2.PNG';
import Shop3 from '../../images/shop3.jpg';


const SingleApp = (props) => {

    const handleCopy = (e, id, value) => {
        e.stopPropagation();

        const copyId = document.getElementById(id);
        copyId.select();
        document.execCommand('Copy');
        copyId.value = "Copied";

        copyId.style.backgroundColor = "#aaf7b6";
        setTimeout(() => {
            copyId.value = value;
            copyId.style.backgroundColor = "#eadac5";
          }, 1000)
    }

    //kurac

    return (
        <div className="single-app-container">
            <div className="single-app-title">{props.title}</div>
            <div className="apps-used-container">
                <img src={MongoIcon} alt="Mongo" />
                <img src={ExpressIcon} alt="Express"/>
                <img src={ReactIcon} alt="React" />
                <img src={NodeIcon} alt="Node" />
                {props.reduxUsed ? <img src={ReduxIcon} alt="Redux" /> : null}
                <img src={D3Icon} alt="d3" />
            </div>

            <div className="single-app-info-container">
                <div>
                    <ul>
                  {props.infoObject.leftLi.map((item, index) => {
                      return (
                      <Zoom delay={100 * index} key={index}>
                      <li key={item}>{item}</li>
                      </Zoom>
                      )
                  })}
                    </ul>
                </div>

                <div>
                    <ul>
                    {props.infoObject.middleLi.map((item, index) => {
                         return (
                         <Zoom delay={400 + (100 * index)} key={index}>
                        <li key={item}>{item}</li>
                      </Zoom> )
                  })}
                    </ul>
                </div>

                <div>
                    <ul>
                    {props.infoObject.rightLi.map((item, index) => {
                      return( 
                        <Zoom delay={600 + (100 * index)}key={index}>
                      <li key={item}>{item}</li>
                      </Zoom>
                      )
                  })}
                    </ul>
                </div>
            </div>
                  <LoginData 
                  data={props.title === "Shoe shop" ?  shopAppLoginData : betAppLoginData} 
                  handleCopy={handleCopy}
                  title={props.title === "Shoe shop" ? shopAppLoginTitle : betAppLoginTitle}
                  />
        {props.title === "Shoe shop" ? <div className="single-app-picture-container">
                <img src={Shop2} alt="Home page" />
                <img src={Shop3} alt="Cart" />
                <img src={Shop1} alt="Admin stats" />
        </div>
        :
        <div className="single-app-picture-container">
                <img src={Bets1} alt="Manage bets" />
                <img src={Bets3} alt="Single bet" />
                <img src={Bets2Alt} alt="Add bet" />
        </div>}

        <div className="visit-app">
            <a href={props.title === "Shoe shop" ? "https://spaha-shopapp.netlify.app/" : "https://spaha-betapp.netlify.app/"} target="_blank" rel="noreferrer">
                <span>Visit page</span>
                <img src={ExternalGoToIcon} alt="go to external link" />
                </a>
         
            </div>
        </div>
    );
};

export default SingleApp;