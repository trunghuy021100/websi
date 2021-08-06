import React, { useEffect, useRef, useState } from 'react'
import {data} from './data'
import video_play from './video.mp4'
function Services() {
    const [select,setSelect]=useState(0);
    const [play,setPlay]=useState(false);
    const [count,setCount]=useState(-1);
    const video=useRef(null)
    const handlePlayVideo=(e)=>{
        e.preventDefault();
        if(count===-1){setCount(0)}
        if(count!==-1){setCount(count+1)}
        setPlay(true)
        video.current.play();
    }

   const handlePauseVideo=(e)=>{
        setCount(count-1);
        setPlay(false)  ;
        video.current.pause();
    }
    useEffect(()=>
    {
       
       if(video!==null)
        {
           
            if(play===true & count===15)
            {
                
                video.current.pause();
                setPlay(false);
                setCount(0)

            }
           else if(play===true && count<15)
            {
               setTimeout(()=>{
                setCount(count+1)
               },1000)
            }
        }
    },[count])
    return (
        <div className="services">
            <h1 className="title-ser">SERVICES</h1>
            <div className="">
                {data.map((item,index)=>{
                    return(
                        <div className="service" key={index} onClick={()=>setSelect(index)}>
                            <div className="service-content">
                            <i className={select===index?"service-icon bg-pink":"service-icon"}>{item.icons}</i>
                            <div className={select===index?"service-title title-lager":"service-title"}>{item.title1}</div>
                            <p>{item.title2}</p>
                            <p>{item.title3}</p>
                            </div>
                            </div>
                    )
                })}
            </div>
            <div className="block-video">
            <div className="div-one" >MAKE AMAZING WEBSITE</div>
            <div className="div-two">Watch Our Tutorial</div>
            <div className="video">
                <div className="btn-pause" onClick={handlePauseVideo}>Pause</div>
                <video className="" src={video_play}  width="100%" height="100%" marginHeight="0" marginWidth="0" ref={video}></video>
                <div className={`${play===false?"block-play":" block-play block-hide"}`}>
                   <div className="btn-play" onClick={(e)=>handlePlayVideo(e)}>
                       <i><ion-icon name="caret-forward-outline"></ion-icon></i>
                   </div>
                </div>
            </div>
            </div>
          
        </div>
    )
}

export default Services
