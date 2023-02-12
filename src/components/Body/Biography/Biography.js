import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import "./styles.scss";

const Biography = (props) => {
  return (
    <div className="biography-container">
      <div className="biography-title">About me</div>
      <div className="biography-body">
        <div className="biography-text">
          <div className="biography-paragraph">
          With five years of coding experience, both as a hobbyist and professional, I have established a strong foundation in software development. My passion for coding grew from a weekend hobby to an all-consuming obsession, leading me to make the transition to full-time development in April 2021. My background in film, including studies in directing at the Academy of Performing Arts in Sarajevo and work as an assistant director in movies, shorts, and commercials, has honed my creative problem-solving skills, which I now apply to developing dynamic software solutions.
          </div>

          <div className="biography-paragraph">
          I thrive in challenging environments and have a strong aptitude for problem-solving. My logical and methodical approach to development, combined with my team-oriented mindset, make me a valuable asset to any development project. I am continuously seeking to improve my skills and knowledge in the field, eager to learn from senior developers and other professionals in order to fill any gaps in my current coding abilities.
          </div>

          <div className="biography-paragraph">
          As a highly professional individual, I place a strong emphasis on being punctual and organized, both in my personal life and in the workplace. I am capable of adapting to different hierarchical structures, stepping up as a leader when necessary and collaborating effectively as a team player.
          </div>
        </div>

        <div className="biography-contact">
          <span className="contact-title">Contact me</span>
          <a href="mailto:spahinho@gmail.com">
            <span className="contact-item">spahinho@gmail.com</span>
          </a>
          <span className="contact-item">+387 61 414 045</span>
          <span className="contact-item">+385 95 501 2875</span>
          <div className="download-cv">
            <button
              type="submit"
              onClick={() =>
                window.open(
                  "https://drive.google.com/u/0/uc?id=1gpT39Aa_jgEaPyoTf0rh2BRuewIxJL58&export=download"
                )
              }
            >
              <span>Download CV</span>
              <FontAwesomeIcon icon={faDownload} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biography;
