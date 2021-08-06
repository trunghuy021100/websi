import React, { useState } from 'react'
import { data } from './data'

function Descript() {
    const [pick,setPick]=useState(0);
    return (
        <div className="des">
            
                {data.map((item,index)=>{
                    return (
                        <div key={index} className="des-featured">
                            <div className={`${pick===index?"des-content des-pink":"des-content"}`} onClick={()=>setPick(index)}>
                            <i className="des-icon">{item.icon}</i>
                            <h5 className="des-title">{item.title}</h5>
                            <div className={`${pick===index?"block-des des-white":"block-des"}`}></div>
                            <p>{item.content}</p>
                            <p>doloribus!</p>
                            </div>
                            </div>
                    )
                })}
            </div>
        
    )
}

export default Descript
