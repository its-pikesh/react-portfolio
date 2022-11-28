/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./About.css";
// import ME2 from "../../assets/me2.png";
import ME2 from "../../assets/about.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import bit1 from '../../assets/bitmojis/1.png'
import bit2 from '../../assets/bitmojis/2.png'
import bit3 from '../../assets/bitmojis/3.png'
import bit4 from '../../assets/bitmojis/4.png'
import bit5 from '../../assets/bitmojis/5.png'
import bit6 from '../../assets/bitmojis/6.png'
import bit7 from '../../assets/bitmojis/7.png'
import bit8 from '../../assets/bitmojis/8.png'
import bit9 from '../../assets/bitmojis/9.png'
import bit10 from '../../assets/bitmojis/10.png'
import bit11 from '../../assets/bitmojis/11.png'
import bit12 from '../../assets/bitmojis/12.png'
import bit13 from '../../assets/bitmojis/13.png'
import bit14 from '../../assets/bitmojis/14.png'
import bit15 from '../../assets/bitmojis/15.png'
import bit16 from '../../assets/bitmojis/16.png'
import bit0 from '../../assets/bitmojis/0.png'

const About = () => {
  const arrayImg = [bit0, bit1,bit2, bit3, bit4, bit5, bit6, bit7, bit8, bit9, bit10, bit11, bit12, bit13, bit14, bit15, bit16]
  const randomBit= Math.floor(Math.random() * 17);
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img className="about__image" src={arrayImg[randomBit]} alt="about me image" />
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
