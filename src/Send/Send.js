import React from 'react'
import { FaBaseballBall, FaBasketballBall, FaEnvelope, FaFacebook, FaFacebookF, FaLinkedinIn, FaMapMarkedAlt, FaPhone, FaSkype, FaTwitter } from 'react-icons/fa'

function Send() {
    return (
        <div className="send">
            <div className="bg-send1">
            </div>
            <div className="bg-send2">
            </div>
            <h1 className="send-in">GET IN TOUCH</h1>
            <div className="send-content">
               
                <div className="send-left">
                    <div className="text-send-left">
                    <h1>SEND A MESSAGE</h1>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus adipisci cupiditate iste ratione aspernatur itaque eius neque numquam explicabo unde </p>
                    <div className="send-input" ><div className="send-input1"><input placeholder="Full Name"></input></div></div>
                       <div className="send-input" ><div className="send-input2"><input placeholder="Phone"></input></div></div>
                      <div className="send-input" ><div className="send-input1"><input placeholder="Email"></input></div></div>
                       <div className="send-input" ><div className="send-input2"><input placeholder="Subject"></input></div></div>
                      <textarea placeholder="Write your meassage ..."></textarea>
                      <div className="btn-send"> <div><button type="button">Send Now</button></div></div>
                </div>
                </div>
                <div className="send-right">
                    <div className="text-send-right">
                    <div className="send-info">
                        <h3> CONTACT INFO</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus adipisci cupiditate iste ratione </p>
                        <div className="send-icon">
                            <i ><FaMapMarkedAlt></FaMapMarkedAlt></i>
                            <div className="send-text">
                                <h6>Address</h6>
                                <p>Elston TCLexington 549MD,</p>
                                <p>London,UK</p>
                            </div>
                        </div>
                        <div className="send-icon">
                        <i><FaEnvelope></FaEnvelope></i>
                            <div className="send-text">
                                <h6>Email</h6>
                                <p>Info@exper.com</p>
                                <p>Support@exper.com</p>
                            </div>
                        </div>
                        <div className="send-icon">
                            <i><FaPhone></FaPhone></i>
                            <div className="send-text">
                                <h6>Phone</h6>
                                <p>(+84) 0123456789</p>
                                <p>Office-(001) 2345 678</p>
                            </div>
                        </div>
                        <div className="send-icon">
                            <i><FaSkype></FaSkype></i>
                            <div className="send-text">
                                <h6>Skype</h6>
                                <p>User.skype</p>
                            </div>
                        </div>
                       
                       
                        <div className="send-logo">
                        <div className="send-color1"><i><FaFacebookF></FaFacebookF></i></div>
                        <div className="send-color2"><i><FaTwitter></FaTwitter></i></div>
                        <div className="send-color3"><i><FaBasketballBall></FaBasketballBall></i></div>
                        <div className="send-color4"><i><FaLinkedinIn></FaLinkedinIn></i></div>
                        </div>
                        </div>
                        
                </div>
                </div>
            </div>
            
        </div>
    )
}

export default Send
