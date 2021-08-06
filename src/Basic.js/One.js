import React from 'react'

function One({item,index,pick,setPick}) {
    
    return (
        <div className={`${index===3?"basic-dis basic-one":"basic-one"}`}>
            <div className="basic-main">
            <div className={`${pick===index?"basic-content basic-color":"basic-content"}`} onClick={()=>setPick(index)}>
            <b>{item.name}</b>
            <div className="basic-num"><p>$</p> <h1>{item.num}</h1><p> / month</p></div>
            <p>10GB Disk Space</p>
            <p>15 Domain Names</p>
            <p>4 Email Address</p>
            <p>Enhanced Security</p>
            <p>Unlimited Support</p>
            <div className="basic-now">
                Purchase Now
            </div>
        </div>
        </div>
        </div>
    )
}

export default One
