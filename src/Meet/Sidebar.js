import React, { useEffect,useState } from 'react'

function Sidebar({item,bar}) {
    const [count,setCount]=useState(0);
    let t=0.7/item.num;
   t= Math.round(t*10000)/10;
    useEffect(()=>{
        if(count<item.num && bar===true)
        setTimeout(()=>{
            setCount(count+1)
        },t)
    },[count,bar])
    return (
        <li >
            <h6>{item.name}</h6>
        <div className="bar-fix"></div>
        <div className="bar-run" style={{width:`${bar===false?"0px":`${item.num}%`}`}}>
            <div className="bar-run-down"> <div className="bar-info">
                <div className="square">
                    <p>{count}%</p>
                </div>
                <div className="no-square"></div></div></div>
        
        </div>
        

    </li>
    )
}

export default Sidebar
