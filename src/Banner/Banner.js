import React from 'react'
import image from './image/img.svg'
function Banner() {
    return (
        <div className="banner-img">
            
                <div className="banner1"></div>
                <div className="banner2"></div>
                <div className="banner3"></div>
                <div className="banner4"></div> 
                <div className="banner4 change1"></div> 
                <div className="banner4 change2"></div> 
                <div className="banner4 change3"></div> 
                <div className="banner5"></div>
                <div className="banner6"></div>
            
            <div className="banner-content">
                <div className="banner-text">
                <h1>Beautify Landing page Kit for Startup</h1>
                <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo culpa dolores commodi temporibus sint, eaque deserunt rem</p>
                <button>Start Free Trial</button>
                <button>Check Feautures</button>
                </div>
                <div className="banner-image">
                    <div>
                        <img src={image}></img>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Banner

