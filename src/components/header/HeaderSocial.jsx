import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com">
        <BsGithub />
      </a>
      <a href="https://linkedin.com">
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocial;
