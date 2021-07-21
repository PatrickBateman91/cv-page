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
            I have been coding for a little over 3 years now, mostly for myself.
            My background is in film. I have studied directing at Academy of
            Performing Arts in Sarajevo, and have worked as an assistant
            director in feature-length movies, shorts and commercials.{" "}
            <span className="highlighted">But my heart is in code.</span> What
            started as a sunday hobby became a passion and obsession. And as of
            april 2021, I officially started my dev journey.
          </div>

          <div className="biography-paragraph">
            I love challenges. I would describe myself as being very logical and
            methodical, good at problem solving and a team player. I have a huge
            desire to learn new things, and I am very well aware that my current
            coding knowledge has gaps and I am eager to fill them with the
            guidance of seniors and other professionals.
          </div>

          <div className="biography-paragraph">
            I have always been described as a professional above all. I am
            punctual and neat, both in personal life and in work environment. I
            fit great into hierarchy. I can take charge when needed and
            recognize when it’s time to lay back and let others lead.
          </div>
        </div>

        <div className="biography-contact">
          <span className="contact-title">Contact me</span>
          <a href="mailto:spahinho@gmail.com">
            <span className="contact-item">spahinho@gmail.com</span>
          </a>
          <span className="contact-item">+387 61 414 045</span>
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
