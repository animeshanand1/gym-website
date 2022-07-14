import React from 'react'
import { plansData } from "../../data/plansData";
import whiteTick from '../../assets/whiteTick.png'
import "./plans.css";

export const Plans = () => {
  return (
    
    <div id='plans' className="plans-container">
      <div className='blur blur-plans-1'></div>
      <div className='blur blur-plans-2'></div>
      <div className="programs-header" style={{ gap: "2rem" }}>
      <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITHUS</span>
      </div>
    <div className="plans">
        {plansData.map((plan)=>{
            
            return(
            <div className="plan">
                {plan.icon}
                <span>{plan.name}</span>
                <span>$ {plan.price}</span>
                <div className="features">
                    {plan.features.map((feature,i)=>{
                        return(
                        <div className="feature">
                            <img src={whiteTick}/>
                            <span key={i}>{feature}</span>
                        </div>)
                    })}
                </div>
                <div>
                  <span>See more benefits</span>
                </div>
                <button className='btn'>join now</button>
            </div>)
        })
        }
        </div>  
        
    </div>
  )
}

export default Plans;