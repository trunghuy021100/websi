import React, { useRef, useState } from 'react'
import { FaEnvelope } from 'react-icons/fa'
import One from './One'

function Footer2() {
    
    const [bar,setBar]=useState(false)
    const bar2 = useRef(null)
    window.addEventListener('scroll',function()
    {
      
        if(bar2.current!==null)
        { 
           
        if(window.scrollY +80>= bar2.current.offsetTop)
        {
            setBar(true)
        }
    }
    })
    const arr=[
        {
        icon:<ion-icon name="mail-outline"></ion-icon>,
        num:446,
        name:"PROJECTS"},
        {
        icon:<ion-icon name="star-outline"></ion-icon>
        ,
        num:1200,
        name:"VIDEOS"},
        {
        icon:<ion-icon name="create-outline"></ion-icon>,
        num:990,
        name:"AWARDS"},
        {
        icon:<ion-icon name="basketball-outline"></ion-icon>,
        num:1232,
        name:"CLIENTS"},
    ]
    return (
        <div className="footer2 " ref={bar2}>
        <div className="bg-footer2">
            
        </div>
        <div className="footer2-content">
            <div  ></div>
            <div className="footer2-main">
                {
                    arr.map((item,index)=>{
                        return (
                            <One key={index} item={item} bar={bar}></One>
                        )
                    })
                }
        </div>
        </div>
    </div>
    )
}

export default Footer2
