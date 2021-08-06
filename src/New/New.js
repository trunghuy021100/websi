import React from 'react'
import { FaCalendarAlt, FaComment, FaTags } from 'react-icons/fa'
import anh1 from './images/image_03.png'
import anh2 from './images/image_05.png'
import anh3 from './images/image_07.png'
function New() {
    return (
        <div className="new">
            <div className="new-main">
                
            <div className="new-one">
                <div className="new-detail">
                <b><i><FaTags></FaTags></i> JAVA,PHP&ensp; <i><FaCalendarAlt></FaCalendarAlt></i>  JUNE 10 2018&ensp; <i><FaComment></FaComment></i> 1</b>
                <div className="new-img">
                    <img src={anh1}></img>
                    <div className="new-small">
                        <img src={anh1}></img>
                    </div>
                </div>
                <h6>
                    LAST NEWS POST
                </h6>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab at, officia accusamus ducimus repellat illum voluptas. Veniam minus optio qui incidunt, deserunt nesciunt iusto enim quis commodi non aliquid laboriosam!</p>
            </div>
            </div>
            <div className="new-one">
                <div className="new-detail">
                <b><i><FaTags></FaTags></i> JAVA,PHP&ensp; <i><FaCalendarAlt></FaCalendarAlt></i>  JUNE 10 2018&ensp; <i><FaComment></FaComment></i> 1</b>
                <div className="new-img">
                    <img src={anh2}></img>
                    <div className="new-small">
                        <img src={anh2}></img>
                    </div>
                </div>
                <h6>
                    LAST NEWS POST
                </h6>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab at, officia accusamus ducimus repellat illum voluptas. Veniam minus optio qui incidunt, deserunt nesciunt iusto enim quis commodi non aliquid laboriosam!</p>
            </div>
            </div>
            <div className="new-one">
                <div className="new-detail">
                <b><i><FaTags></FaTags></i> JAVA,PHP&ensp; <i><FaCalendarAlt></FaCalendarAlt></i>  JUNE 10 2018&ensp; <i><FaComment></FaComment></i> 1</b>
                <div className="new-img">
                    <img src={anh3}></img>
                    <div className="new-small">
                        <img src={anh3}></img>
                    </div>
                </div>
                <h6>
                    LAST NEWS POST
                </h6>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab at, officia accusamus ducimus repellat illum voluptas. Veniam minus optio qui incidunt, deserunt nesciunt iusto enim quis commodi non aliquid laboriosam!</p>
            </div>
            </div>
            </div>
            <div className="new-bot"></div>
        </div>
    )
}

export default New
