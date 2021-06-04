import React from "react"
import './style.css'
import sampleImg from './images/p_images/sub_gallery_01.jpg'

const ContentsItem = ({  }) => {
    
    
        return (
            <div className="item_a">
                <img src={sampleImg} alt=""/>
                <div style={{width:'100%', background:'red'}}>aaa</div>
            </div>
        );
    
}
export default ContentsItem;