import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'

function Hero() {
  return (
    <div className="hero-main" id="Home">
      <div className="blur hero-blur"></div>
      <div className="left-hero">
        <Header />
        <div className="best-ad">
          <div></div>
          <span>The Best Fitness Center in the town</span>
        </div>
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape</span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              Do something today that your future self will thank you for.
            </span>
          </div>
        </div>
        <div className="figures">
          <div>
            <span>+140</span>
            <span>EXPERT COACHES</span>
          </div>
          <div>
            <span>+1200</span>
            <span>MEMBERS JOINED</span>
          </div>
          <div>
            <span>+50</span>
            <span>FITNESS PROGRAMS</span>
          </div>
        </div>
        <div className="hero-buttons">
          <btn className='btn'>Get Started</btn>
          <btn className='btn'>Learn More</btn>
        </div>
      </div>
      <div className="right-hero">
        <button className="btn">Join Now</button>

        <div className="heart-rate">
          <img src={Heart} alt=""/>
          <span>Heart Rate</span><span>115 bpm</span>
        </div>
        <img className="hero-image-back" src={hero_image_back}/>
        <img className="hero-image" src={hero_image}/>
        
      <div className="calories">
        <img src={Calories} />
        <div>
        <span>Calories burned</span>
        <span>454 kcal</span>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Hero;
