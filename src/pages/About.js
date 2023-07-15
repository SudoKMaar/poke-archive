import "./About.scss";
import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Wrapper from "../components/Wrapper";
import avatarImage from "../assets/PokeArchive.png";
import CopyrightInfo from "../components/CopyrightInfo";

function About() {
  return (
    <div className="profile">
      <img src={avatarImage} alt="" className="profile-image" />
      <h1 className="profile-text">Welcome to Poké Archive</h1>
      <h2 className="profile-text">Unleash the Pokémon Knowledge</h2>
      <h4 className="profile-text">
        Discover, explore, and catch 'em all with our interactive web
        application. Get ready to dive into a treasure trove of information,
        from Pokemon details and evolution chains to locations and capable
        moves. With user authentication, personalized lists, and toast
        notifications, your Pokemon journey will be unforgettable. Powered by
        React, Firebase and Redux Toolkit, Pokedex combines cutting-edge
        technology with a seamless user experience. Unleash your inner trainer
        and embark on an adventure like no other. Start your Pokemon quest
        today!
      </h4>
      <div className="profile-links">
        <a href="https://github.com/SudoKMaar">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/kmaar44">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/AbhishekKMaar/">
          <FaLinkedin />
        </a>
      </div>
      <CopyrightInfo />
    </div>
  );
}

export default Wrapper(About);
