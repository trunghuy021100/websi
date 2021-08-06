import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaWeibo } from 'react-icons/fa'
function Footer3() {
    return (
        <div className="footer3">
            <div className="bg-footer3"></div>
            <h2>EXPLORE</h2>
            <div className="footer3-icon">
               <div><i><FaFacebookF></FaFacebookF></i></div>
               <div><i><FaTwitter></FaTwitter></i></div>
               <div><i><FaInstagram></FaInstagram></i></div>
               <div><i><FaLinkedinIn></FaLinkedinIn></i></div>
               <div><i><FaWeibo></FaWeibo></i></div>
            </div>
            <p>@ 2021 EXPLORE ALL RIGHT RESERVED</p>
        </div>
    )
}

export default Footer3
