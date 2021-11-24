import React from 'react'
import "./About.css";
import about from './img/about.jpg'

function About() {
    return (
        <div className="about component__space">
            <div className="container">
                <div className="row">
                    <div className="col__2">
                        <img src={about} alt="abt" height="500px" className="about__img"/>
                    </div>
                    <div className="col__2">
                        <h1 className="about__heading">
                            About Me
                        </h1>
                        <div className="about__meta">
                            <p className="about__text p__color">
                                I am Shivakumargouda Patil, I am Completed my Diploma in Computer
                                Science and Techanology and Bachelor's of Enginneering in Computer 
                                Science and Enginneering.
                            </p>
                            <p className="about__text p__color">
                                I am from Hubli Karntaka present living in Banglore
                            </p>    
                            <p className="about__text p__color">
                                Worked as an Web Developer(Intern) at Reformx Technologies(Bangalore).
                            </p>
                            <div className="about__button d__flex align__items__center">
                                <a href="Shivu-Resume.pdf" download><button className="about btn pointer">Download CV</button></a>
                                <a href="#"><button className="about btn pointer">Hire Me</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
