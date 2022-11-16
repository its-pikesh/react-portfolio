/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./Portfolio.css";
// import IMG1 from "../../assets/GatsbyPortfolio.png";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "React Gatsby PortFolio",
      github: "https://github.com/its-pikesh/portfolio",
      demo: "https://resume-5fee1.firebaseapp.com/",
    },
    {
      id: 2,
      image: IMG2,
      title: "NetFlix UI Clone react",
      github: "https://github.com/its-pikesh/netflix-clone-react",
      demo: "https://netflix-clone-react-c5973.web.app/",
    },
    {
      id: 3,
      image: IMG3,
      title: "Live Covid 19 tracker",
      github: "https://github.com/its-pikesh/covid-tracker",
      demo: "https://covid-19-tracker-6e3fb.web.app/",
    },
    {
      id: 4,
      image: IMG4,
      title: "Tesla UI clone react",
      github: "https://github.com/its-pikesh/tesla-clone-react",
      demo: "https://tesla-clone-react-9ccfa.web.app/",
    },
    // {
    //   id: 5,
    //   image: IMG5,
    //   title: "Crypto currency and financial visualization",
    //   github: "https://github.com",
    //   demo: "https://github.com",
    // },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img className="portfolio__image" src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
