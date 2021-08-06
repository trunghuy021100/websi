import React, { useEffect, useState } from 'react'
import { data } from './data'
function All() {
   const [arr,setArr]=useState(data)
   const [pick,setPick]=useState(0);
   const [fil,setFil]=useState(false);
   const handleFilter1=()=>{setPick(0);setFil(false)}
   const handleFilter2=()=>{setPick(1);setFil(false)}
   const handleFilter3=()=>{setPick(2);setFil(false)}
   const handleFilter4=()=>{setPick(3);setFil(false)}
   
    useEffect(()=>{
       
       
        setTimeout(()=>{
            setFil(true)
            if(pick!==0)
            {
            let b=data.filter((item,index)=>Number(item.category)===pick);
            setArr(b)
            }
            else{
                setArr(data)
            }
        },500)
    },[pick])
    return (
        <div className="all">
            <div className="block-all">
            <div className="all-filter">
                    <span>
                        <p onClick={handleFilter1} className={`${pick===0?"bg-all-filter":"bg-all-filter hide-all-filter"}`}>All</p>
                        <p onClick={handleFilter2} className={`${pick===1?"bg-all-filter":"bg-all-filter hide-all-filter"}`}>Graphics</p>
                        <p onClick={handleFilter3} className={`${pick===2?"bg-all-filter":"bg-all-filter hide-all-filter"}`}>Design</p>
                        <p onClick={handleFilter4} className={`${pick===3?"bg-all-filter":"bg-all-filter hide-all-filter"}`}>Marketing</p>
                        </span>
            </div>
            <div className="all-main">
                {
                    arr.map((item,index)=>{
                        return (<div key={index} className={`${fil?"all-one":"all-one fil-all"}`}>
                            <img src={item.image}></img>
                        </div>)
                    })
                }
            </div>
            </div>
        </div>
    )
}

export default All
