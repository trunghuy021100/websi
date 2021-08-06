import React, { useState } from 'react'
import { FaEdit, FaQrcode, FaSkullCrossbones } from 'react-icons/fa'
import phone from './phone.png'

function Phone() {
    const [pick,setPick]=useState(0);
    return (
        
        <div className="phone">
            <div className="phone-title">
                <div>AWESOME FEATURES</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </div>
            <div className="phone-main">
            <div className="phone-left">
               <img src={phone}></img>
            </div>
            <div className="phone-right">
                <ul>
                    <li>
                        <div className="phone-icon">
                            <div className={`${pick===0?"phone-pink":""}`} onClick={()=>setPick(0)}>
                                <i><FaEdit></FaEdit></i>
                            </div>
                        </div>
                        <div className="phone-content">
                            <h5>EASY CUSTOMZATION</h5>
                            <h6>Lorem ipsum, dolor sit amet </h6>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur modi cumque pariatur nobis assumenda corporis error corrupti architecto aliquid? Corporis quam rem culpa a iusto, unde accusamus nisi sequi fuga?</p>
                        </div>
                    
                    </li>
                    <li>
                        <div className="phone-icon">
                            <div className={`${pick===1?"phone-pink":""}`} onClick={()=>setPick(1)}>
                                <i><FaQrcode></FaQrcode></i>
                            </div>
                        </div>
                        <div className="phone-content">
                            <h5>MINAMAL DESIGN</h5>
                            <h6>Lorem ipsum, dolor sit amet</h6>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur modi cumque pariatur nobis assumenda corporis error corrupti architecto aliquid? Corporis quam rem culpa a iusto, unde accusamus nisi sequi fuga?</p>
                        </div>
                    
                    </li>
                    <li>
                        <div className="phone-icon">
                            <div className={`${pick===2?"phone-pink":""}`} onClick={()=>setPick(2)}>
                                <i><FaSkullCrossbones></FaSkullCrossbones></i>
                            </div>
                        </div>
                        <div className="phone-content">
                            <h5>CREATIVE DESIGN</h5>
                            <h6>Lorem ipsum, dolor sit amet</h6>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur modi cumque pariatur nobis assumenda corporis error corrupti architecto aliquid? Corporis quam rem culpa a iusto, unde accusamus nisi sequi fuga?</p>
                        </div>
                    
                    </li>
                </ul>
            </div>
        </div>
        </div>
    )
}

export default Phone
