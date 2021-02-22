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
                        Because of COVID, situation in my profession is looking dreadful, so I am looking to a permanent switch to <b>web development</b> because I have been developing passionately on the side for the last <b>3 years</b>.
                    </div>
                </Slide>

                <Slide right delay={300}>
                    <div className="about-me-paragraph">
                        I have a good understanding of <b>Javascript</b> & <b>React</b> on the front end, and <b>Node.js</b> & <b>Express</b> on the back end. I have worked with <b>NoSQL</b> databases, notably with <b>MongoDB</b>.
                        I am familiar with other technologies & tools commonly used for web development such as <b>jQuery</b>, <b>Redux</b>, <b>Bootstrap</b>, <b>Materialize</b>, <b>SASS</b>, <b>D3</b> and more.
                    </div>
                </Slide>

                <Slide right delay={350}>
                    <div className="about-me-paragraph">
                        I will stop here and stick to the golden rule of <b>Show don't tell</b>, and let you be the judge of my abilities based on the <b>two portfolio projects</b> below. All I ask from you is to check them out before dismissing me on the grounds of having no professional experience.  
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