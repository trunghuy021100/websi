import React, { useState } from 'react'
import One from './One'

function Basic() {
    const arr=[
        {
        name:"Free",
        num:"00"},
        {
        name:"Basic",
        num:"10"},
        {
        name:"Standard",
        num:"30"},
        {
        name:"Premium",
        num:"80"},
]
    const [pick,setPick]=useState(0)
    return (
        <div className="basic">
            {
                arr.map((item,index)=>{
                    return (<One key={index} index={index} item={item} pick={pick} setPick={setPick}></One>)
                })
            }
        </div>
    )
}

export default Basic
