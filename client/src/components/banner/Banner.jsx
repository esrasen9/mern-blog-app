import React from 'react';
import "./Banner.css";
import bannerImg from "../../img/pexels-photo-547125.jpeg";

const Banner = () => {
    return (
        <img className="banner-img" src={bannerImg} alt=""/>
    );
}

export default Banner;