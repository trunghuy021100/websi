import React, { useState } from 'react'
import {FaStar} from 'react-icons/fa'
import messi from './messi.jpg'
import faker from './faker.jpg'
function People() {
    const [pick,setPick]=useState(0)
    return (
        <div className="people">
            
            <div className="people-info">
                <div className="people-run">
                    <div className={`${pick===0?"block-run":"block-run people-hide"}`}>
                <div >
                <p> Lorem ipsum dolor sit amet consectetur, delectus reprehenderit corporis nostrum quos error necessitatibus natus ea expedita obcaecati ducimus .</p>
                <h5>MESSI</h5>
                <h6>Football Player</h6>
                <i><FaStar></FaStar></i>
                <i><FaStar></FaStar></i>
                <i><FaStar></FaStar></i>
                </div>
                <div  >
                <p > Lorem ipsum dolor sit amet consectetur, delectus reprehenderit corporis nostrum quos error necessitatibus natus ea expedita obcaecati ducimus .</p>
                <h5>FAKER</h5>
                <h6>Gamer</h6>
                <i><FaStar></FaStar></i>
                <i><FaStar></FaStar></i>
                <i><FaStar></FaStar></i>
            </div>
            </div>
            </div>
            <div className="people-img">
                <div className="block-peo">
                    <div className="peo-ro">
                    <div className={`${pick===0?"block-go":"block-go-right block-go"}`}>
                        <img src={messi}></img>
                        <img src={faker}></img>
                    </div>
                    </div>
                    
                </div>
            </div>
            </div>
            <div className="btn-run">
                    <ul><li className={`${pick===0?"btn-nomal btn-hot":"btn-nomal"}`} onClick={()=>setPick(0)} ></li>
                    <li className={`${pick===1?"btn-nomal btn-hot":"btn-nomal"}`} onClick={()=>setPick(1)}></li>
                    </ul>

                </div>
        </div>
    )
}

export default People
