import React from "react";
import "./About.css";

import githubIcon from '../../../assets/github-light.svg';
import instaDark from '../../../assets/insta.svg';
import linkedinIcon from '../../../assets/linkedin-light.svg';

function About() {
  return (
    <section id="about" className="aboutContainer">
      <div className="wrapper1">
        <div className="container-heading">
          <h2 className="centered-heading">About Me</h2>
        </div>

        <div className="container1">
          <div className="left-container1">
            <h3 className="name">Mohammed Misfar Yusaf C</h3>
            <h3>misfaryusaf@gmail.com</h3>
          </div>
          <div className="right-container1">
            <h2 className="yes1">hello there !</h2>
            <p className="yes-mobile">
              As a passionate and dedicated tech enthusiast, I bring a
              self-directed and motivated approach to frontend development. I
              thrive in dynamic and ever-evolving environments, constantly
              seeking to expand my horizons and embrace new challenges. With a
              unique blend of skills and experiences, I am committed to
              delivering exceptional user experiences and innovative solutions.
              My articulate and responsible nature ensures effective
              communication and collaboration within any team.
            </p>
            <p className="no-mobile">
              With a strong foundation in frontend development, I bring a
              diverse skill set in software development, optimization, and
              innovation across various platforms. I excel at crafting efficient
              user interfaces and building robust web applications. My expertise
              lies in developing intuitive and responsive designs that enhance
              user experiences.
            </p>

            <p className="no-mobile">
              I am equally proficient in optimizing existing systems to ensure
              they operate at peak performance. By leveraging my knowledge and
              skills, I aim to deliver seamless and engaging digital
              experiences. My commitment to continuous improvement and passion
              for technology drive me to stay ahead of industry trends and
              deliver high-quality solutions.
            </p>
            <span className="aboutme-icon">
              <a href="https://www.instagram.com/misfar_bin_yusaf/" target="_blank">
                <img src={instaDark} alt="insta-icon" />
              </a>
              <a href="https://www.linkedin.com/in/mohammed-misfar-41a78a279/" target="_blank">
                <img src={linkedinIcon} alt="linkedin icon" />
              </a>
              <a href="https://github.com/Misfarz" target="_blank">
                <img src={githubIcon} alt="github icon" />
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
