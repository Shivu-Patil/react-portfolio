import React from "react";
import "./Project.css";
import Project1 from "./img/portfolio-1.jpg";
import Project2 from "./img/portfolio-2.jpg";
import Project3 from "./img/portfolio-3.jpg";
import Project4 from "./img/portfolio-4.jpg";
 

function Project() {
  return (
    <div className="project component__space">
      <div className="heading">
        <h1 className="heading"> My Latest Project </h1>
        <p className="heading p__color">
          There are many variations of lorem Ipsum Avilable,
        </p>
        <p className="heading p__color">but some of projects are here</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project1} alt="P1" className="project__img" />
                </div>
                <div className="mask__effect"></div>
                <div className="project__meta absolute">
                  <h5 className="project__text">Reformx Technologies</h5>
                  <h4 className="project__text">
                    Official Website
                  </h4>
                  <a href="#" className="project__btn">
                    view Details
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project2} alt="P1" className="project__img" />
                </div>
                <div className="mask__effect"></div>
                <div className="project__meta absolute">
                  <h5 className="project__text">HDFC Bank Clone</h5>
                  <h4 className="project__text">
                    Banking
                  </h4>
                  <a href="#" className="project__btn">
                    view Details
                  </a>
                </div>
              </div>
            </div>
          </div>
                   

        </div>
      </div>
    </div>
  );
}

export default Project;
