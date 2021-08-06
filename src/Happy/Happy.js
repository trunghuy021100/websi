import React, { useState,useRef } from 'react'
import {data1} from './data1'
function Happy() {
    const [num1,setNum1]=useState(0);
    const [num2,setNum2]=useState(1);
  
    
    return (
        <div className="happy">
            <p>Satisfied clients</p>
            <h4>Our Happy Clients</h4>
            <div className="happy-img">
            <div className="happy-1">
                {
                    data1.map((item,index)=>{
                        
                        
                        return(
                            <div key={index} className={`${(index===num1|index===num2)?`${num1===0?"block-img img-fake2":"block-img img-fake1"}`:"block-img"}`}>
                                <img src={item.image}></img>
                            </div>
                        )
                        
                    })
                }
            </div>
                <div className="happy-btn">
                    <div className={`${num1===0?"happy-nomal happy-hot":"happy-nomal"}`} onClick={()=>{setNum1(0);setNum2(1)}}>

                    </div>
                    <div className={`${num1===6?"happy-nomal happy-hot":"happy-nomal"}`} onClick={()=>{setNum1(6);setNum2(7)}}></div>
                </div>
            </div>
        </div>
    )
}

export default Happy
