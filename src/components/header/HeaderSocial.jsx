import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com/in/its-pikesh" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/its-pikesh" target="_blank">
        <BsGithub />
      </a>
      {/* <a href="https://linkedin.com/in/its-pikesh">
        <BsGithub />
      </a> */}
    </div>
  );
};

export default HeaderSocial;
