import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import LoginData from "../LoginData/LoginData";
import TileIcons from "./tileIcons";

const SingleProject = (props) => {
  const handleCopy = (e, id, value) => {
    e.stopPropagation();

    const copyId = document.getElementById(id);
    copyId.select();
    document.execCommand("Copy");
    copyId.value = "Copied";

    copyId.style.backgroundColor = "#3A3856";
    copyId.style.color = "#E0E0E0";
    setTimeout(() => {
      copyId.value = value;
      copyId.style.backgroundColor = "#E0E0E0";
      copyId.style.color = "#000";
    }, 1000);
  };

  const handlePictureHover = (id, e) => {
    const tile = document.getElementById(`project-tile-hover-${id}`);
    if (e.type === "mouseenter") {
      tile.classList.remove("project-tile-hidden");
      tile.classList.add("project-tile-shown");
    } else if (e.type === "mouseleave") {
      tile.classList.remove("project-tile-shown");
      tile.classList.add("project-tile-hidden");
    }
  };

  return (
    <div className="project-container">
      <div className="project-info">
        <div className="project-title">
          <a href={props.project.link} target="_blank" rel="noreferrer">
            {props.project.title}
          </a>
        </div>
        <div className="project-header">{props.project.header}</div>
        {props.project.login ? (
          <LoginData data={props.project.loginData} handleCopy={handleCopy} />
        ) : null}
        <div className="project-text">{props.project.text}</div>
        <div className="project-link">
          <a href={props.project.link} target="_blank" rel="noreferrer">
            <span>Visit {props.project.title}</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>
      </div>
      <div
        className="project-picture"
        onMouseEnter={handlePictureHover.bind(null, props.project.id)}
        onMouseLeave={handlePictureHover.bind(null, props.project.id)}
      >
        <div className="auto">
          <img src={props.project.imgSrc} alt={props.project.title} />
          <div
            id={`project-tile-hover-${props.project.id}`}
            className="project-tile-hover"
          >
            <TileIcons tiles={props.project.tiles} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
