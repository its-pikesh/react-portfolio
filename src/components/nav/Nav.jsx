/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Nav.css";
import { AiOutlineHome, AiOutlineUser,AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import {  BsChatRightQuote } from "react-icons/bs";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setactiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setactiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setactiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setactiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#portfolio"
        onClick={() => setactiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <AiOutlineFundProjectionScreen />
      </a>
      <a
        href="#contact"
        onClick={() => setactiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BsChatRightQuote />
      </a>
    </nav>
  );
};

export default Nav;
