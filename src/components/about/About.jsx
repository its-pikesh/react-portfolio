/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./About.css";
import ME2 from "../../assets/me2.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img className="about__image" src={ME2} alt="about me image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card small ">
              <FaAward className="about__icon" />
              <h5>Experince</h5>
              <small>2+ years</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Projects</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Achievements</h5>
              <small>10+ Certificates & awards</small>
            </article>
          </div>

          <p>
            Tech-savvy Full Stack Web Developer proficient in fundamental front-end languages and server-side languages. In-depth knowledge
            of Reactjs, MySQL and MongoDB. Analytical and precise and professional with 5 years of hands-on experience taking charge of front
            and back-end web development. Adept creation of scripts using HTML, CSS and javascript to convey unique branding. Skillful creating servers and databases for functionality and designing and developing APIs.
            Hardworking collaborator with track record od superior results.

          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
