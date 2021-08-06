import React, { useEffect, useRef, useState } from 'react'
import {FaBars,FaFacebookF, FaLinkedinIn, FaTwitter, FaWeibo, FaYoutube} from 'react-icons/fa'
import { data1 } from './data1'
import {data2} from './data2'
import Sidebar from './Sidebar'
function Meet() {
    const [pick,setPick]=useState(0)
    const [arr,setArr]=useState([2,0,1]);
    const datarun1=[{name:"Web Design",num:95},{name:"PhotoShop/Lightroom",num:75}];
    const datarun2=[{name:"Web Deverlopment",num:75},{name:"Digital Social",num:90}];
    const bar1=useRef(null);
    const [bar,setBar]=useState(false);
    window.addEventListener('scroll',function()
    {
       
        if(bar1.current!==null)
        { 
        if(window.scrollY + window.outerHeight-180 >= bar1.current.offsetTop)
        {

            setBar(true)
        }
    }
    })
   const handleAnh1=()=>{
        setPick(0);setArr([2,0,1]);
    }
   const handleAnh2=()=>{
        setPick(1);setArr([0,1,2]);
    }
   const handleAnh3=()=>{
        setPick(2);setArr([1,2,0]);
    }
    return (
        <div className="meet">
        <div className="meet-up">
            <div className="meet-info">
                <h5>Meet our</h5>
                <h6>Awesome Team</h6>
                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod quasi sapiente cupiditate ex id nisi sit veniam eius, atque veritatis maxime officia facilis doloremque ut aliquid error optio perferendis doloribus.</p>
                <ul>
                    <li onClick={()=>setArr([2,0,1])}><i><FaFacebookF></FaFacebookF></i></li>
                    <li onClick={()=>setArr([0,1,2])}><i><FaTwitter></FaTwitter></i></li>
                    <li onClick={()=>setArr([1,2,0])}><i><FaLinkedinIn></FaLinkedinIn></i></li>
                    <li><i><FaYoutube></FaYoutube></i></li>
                    <li><i><FaWeibo></FaWeibo></i></li>
                </ul>
                </div>
               <div className="meet-right">
            <div className="meet-image">
                <div className="meet-run">
                    <div className="block-run">
                        {
                            data1.map((item,index)=>
                            { 
                                let t=arr.indexOf(index);
                                return <div key={index} className={`${t===1?"meet-show":` ${t===0?"meet-show meet-hide-left ":"meet-show meet-hide-right "} `}`}> <img src={item.img}></img></div>
                            })
                        }
                    </div>
                    <div className="block-run">
                        {
                                data2.map((item,index)=>
                                {
                                    let t=arr.indexOf(index);
                                return <div key={index} className={`${t===1?"meet-show":` ${t===0?"meet-show meet-hide-left ":"meet-show meet-hide-right "} `}`}> <img src={item.img}></img></div>
                                })
                            
                        }
                    </div>
                </div>
                
            </div>
            <div className="btn-run">
                    <ul><li className={`${pick===0?"btn-nomal btn-hot":"btn-nomal"}`} onClick={handleAnh1}></li>
                    <li className={`${pick===1?"btn-nomal btn-hot":"btn-nomal"}`} onClick={handleAnh2}></li>
                    <li className={`${pick===2?"btn-nomal btn-hot":"btn-nomal"}`} onClick={handleAnh3}></li></ul>

                </div>
                </div>
        </div>
        <div className="meet-down" ref={bar1}>
            <ul>
               {datarun1.map((item,index)=>{
                   return (<Sidebar item={item} key={index} bar={bar}></Sidebar>)
               })}
            </ul>
            <ul>
               {datarun2.map((item,index)=>{
                   return (<Sidebar item={item} key={index} bar={bar}></Sidebar>)
               })}
            </ul>
        </div>
        </div>
    )
}

export default Meet
