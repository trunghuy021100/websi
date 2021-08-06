import React,{useState,useEffect} from 'react'

function One({item,bar}) {

    const [count,setCount]=useState(0);

    useEffect(()=>{
        if(count< item.num && bar===true)
        setTimeout(()=>{
            setCount(count+1)
        },0.85)
    },[count,bar])
    return (
        <div className="block-footer2">
           <i>{item.icon}</i>
           <h1>{count}</h1>
           <h5>+{item.name}</h5>
         </div>
    )
}

export default One
