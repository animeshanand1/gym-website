import React from "react";
import './program.css'
import { programsData} from '../../data/programsData' 
import RightArrow from '../../assets/rightArrow.png'

function Programs() {
  return (
    <div className="Programs" id="programs">
      <div className="programs-header">
        <span>Explore our</span>
        <span>Programs</span>
        <span>to shape you</span>
      </div>
      <div className="program-categories">
        {programsData.map((program)=>{
          return(
            <div className="category">
              
                {program.image}
                <span>{program.heading}</span>
                
                <span>{program.details}</span>
                <div className="join-now">join</div>
            </div>)
        })}
      </div>
    </div>
  );
}

export default Programs;
