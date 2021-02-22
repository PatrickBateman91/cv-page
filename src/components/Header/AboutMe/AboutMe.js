import React from 'react';
import Slide from 'react-reveal/Slide';
import './styles.scss';

const AboutMe = (props) => {
    return (
        <div className="about-me-holder">
            <div className="about-me-title-container">
                <div className="about-me-big-title">
                    <Slide right delay={50}><span>M.E.R.N. stack developer</span></Slide>
                    <Slide right delay={150}><span>JavaScript. React. Node.js</span></Slide>
                </div>
            </div>

            <div className="about-me-paragraph-container">
                <Slide right delay={200}>
                    <div className="about-me-paragraph">
                        Hi, my name is <b>Amar Spahić</b> and I am a film directing student who has been working as an assistant director in the film industry for the last 3 years.
                    </div>
                </Slide>

                <Slide right delay={250}>
                    <div className="about-me-paragraph">
                        Because of COVID, situation in my profession is looking dreadful, so I am looking to switch to <b>web development</b> which has been my hobby for the last 3 years. <span className="about-me-note">(and staying there)</span>
                    </div>
                </Slide>

                <Slide right delay={300}>
                    <div className="about-me-paragraph">
                        I have a good understanding of <b>Javascript</b> and <b>React</b>, and have worked with <b>Node.js</b>, <b>Express</b>, and <b>MongoDB</b>.
                    </div>
                </Slide>

                <Slide right delay={350}>
                    <div className="about-me-paragraph">
                        I am going to stick to the golden rule of <b>Show don't tell</b>, and let you be the judge of my abilities based on the <b>two CV projects</b> below. All I ask from you is to check them out before dismissing me on the grounds of having no professional experience.  
                        <b> Source code</b> for both projects can be found on my <a href="https://github.com/PatrickBateman91" target="_blank" rel="noreferrer">github</a> account.
                    </div>
                </Slide>

                <Slide right delay={400}>
                    <div className="about-me-paragraph">
                        If you happen to like what you find there, I am  looking for a job as a <b>front-end / M.E.R.N. stack developer.</b>
                    </div>
                </Slide>

                <Slide right delay={400}>
                    <div className="about-me-paragraph">
                        I am organized, persistent, and a team player. I am living in <b>Sarajevo</b> but wouldn't have a problem moving elsewhere for a good opportunity.
                    </div>
                </Slide>

            </div>
        </div>
    );
};

export default AboutMe;