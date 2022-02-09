import React from 'react';
import AboutIll from "../../img/undraw_content_team_3epn.svg";
import "./About.css";
import {text} from "./about-text";
const About = () => {
    return (
        <div className="about-container">
            <div className="about-content">
                <h1 className="about-title">About Us</h1>
                <p className="about-text">{text}</p>
            </div>
            <img className="about-ill" src={AboutIll} alt="about-ill"/>
        </div>
    );
}

export default About;