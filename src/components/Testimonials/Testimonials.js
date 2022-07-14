import React, { useState } from "react";
import './testimonials.css'
import {testimonialsData} from '../../data/testimonialsData'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
function Testimonials() {
    const [Selected,setSelected]=useState(0)
    const tLength=testimonialsData.length;
  return (
    <div id="testimonials" className="testimonials">
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">What they</span>
        <span>say about us</span>
        <span>
            {testimonialsData[Selected].review}
        </span>
        <span>
            <span style={{color:'var(--orange)'}}>{testimonialsData[Selected].name}</span>-
            <span> {testimonialsData[Selected].status} </span>
        </span>
      </div>
      < div className="right-t">
        <div></div>
        <div></div>
        <img src={testimonialsData[Selected].image}/>
        <div className="arrows">
            <img onClick={()=>{
                Selected===0?setSelected(tLength-1):
                setSelected((prev)=>prev-1);
            }} 
            src={leftArrow}/>
            <img onClick={()=>{
                Selected===tLength-1?setSelected(0):
                setSelected((prev)=>prev+1)
            }}
             src={rightArrow}/>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
