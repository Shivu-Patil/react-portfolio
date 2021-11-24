import React from "react";
import "./Home.css";
import logo from "./img/team.png";

function Home() {
  return (
    <div className="home">
      <div className="home__bg">
        <div className="home d__flex align__items__center pxy__30">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="navigation pxy__30">
            <ul className="navbar d__flex">
              <a href="#Home">
                <li className="nav__items mx__15">Home</li>
              </a>
              <a href="#About">
                <li className="nav__items mx__15">About</li>
              </a>
              <a href="#Services">
                <li className="nav__items mx__15">Services</li>
              </a>
              <a href="#Portfolio">
                <li className="nav__items mx__15">Portfolio</li>
              </a>
              <a href="#Blog">
                <li className="nav__items mx__15">Blog</li>
              </a>
              <a href="#Contact">
                <li className="nav__items mx__15">Contact</li>
              </a>
            </ul>
          </div>
        </div>
        {/* home__content */}
        <div className="container">
          <div className="home__content">
            <div className="home__meta"></div>
            <h1 className="home__text pz__10">
              Welcome To My world
            </h1>
            <h2 className="home__text pz__10">
              Hi, I'm Shivakumar
            </h2>
            <h3 className="home__text sweet ">
              JS Developer.
            </h3>
            {/* <h4 className="home__text sweet ">
 
            </h4> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
