import React, { useState } from 'react'
import anh1 from './images/image_03.png'
import ms1 from './images/ms1.png'
import ms2 from './images/ms2.png'
import ms3 from './images/ms3.png'

function Get() {
    const [pick,setPick]=useState(0)

    return (
        <div className="get">
            <div className="get-filter">
                <ul>
                    <li className={`${pick===0?"get-after":""}`} onClick={()=>{setPick(0)}}>RESPONSIVE</li>
                    <li className={`${pick===1?"get-after":""}`} onClick={()=>{setPick(1)}}>OPTIMIZATIONS</li> 
                </ul>
                <ul>
                    <li className={`${pick===2?"get-after":""}`} onClick={()=>{setPick(2)}}>WEBDESIGN</li>
                    <li className={`${pick===3?"get-after":""}`} onClick={()=>{setPick(3)}}>DEVERLOPMENT</li>
                </ul>
            </div>
            <div className="get-main">
                <div className="get-left">
                  <img src={anh1} className={`${pick===0?"shape1":"shape2"}`}></img>
                  <img src={ms1} className={`${pick===1?"shape1":"shape2"}`}></img>
                  <img src={ms2} className={`${pick===2?"shape1":"shape2"}`}></img>
                  <img src={ms3} className={`${pick===3?"shape1":"shape2"}`}></img>
                </div>
                <div className="get-right">
                    <div className={`${pick===0?"get-info":"get-info get-hide"}`}>
                        <h1>01</h1>
                        <h3>When Creativity Matters in life</h3>
                        <p>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam quisquam voluptatum iure architecto ullam eligendi, similique voluptates aut animi impedit. Recusandae corrupti perspiciatis ipsam hic! Molestiae vel harum doloremque omnis aut animi impedit. Recusandae corrupti perspiciatis!</p>
                        <div>Get In Touch</div>
                    </div>
                    <div className={`${pick===1?"get-info":"get-info get-hide"}`}>
                        <h1>02</h1>
                        <h3>M10</h3>
                        <p>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam quisquam voluptatum iure architecto ullam eligendi, similique voluptates aut animi impedit. Recusandae corrupti perspiciatis ipsam hic! Molestiae vel harum doloremque omnis aut animi impedit. Recusandae corrupti perspiciatis!</p>
                        <div>Get In Touch</div>
                    </div>
                    <div className={`${pick===2?"get-info":"get-info get-hide"}`}>
                        <h1>03</h1>
                        <h3>El Pulga</h3>
                        <p>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam quisquam voluptatum iure architecto ullam eligendi, similique voluptates aut animi impedit. Recusandae corrupti perspiciatis ipsam hic! Molestiae vel harum doloremque omnis aut animi impedit. Recusandae corrupti perspiciatis!</p>
                        <div>Get In Touch</div>
                    </div>
                    <div className={`${pick===3?"get-info":"get-info get-hide"}`}>
                        <h1>04</h1>
                        <h3>Cầu Thủ Xuất Sắc Nhất Thế Giới</h3>
                        <p>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam quisquam voluptatum iure architecto ullam eligendi, similique voluptates aut animi impedit. Recusandae corrupti perspiciatis ipsam hic! Molestiae vel harum doloremque omnis aut animi impedit. Recusandae corrupti perspiciatis!</p>
                        <div>Get In Touch</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Get
