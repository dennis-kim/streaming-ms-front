import React from "react"
import './style.css'
import DefaultImage from './images/default.jpg'

const ContentsItem = ({ contentsName }) => {
    
        return (
            <div className="item_a">
                <img src={DefaultImage} alt=""/>
                <div style={{background:'red', width:'100%'}}>{contentsName}</div>
            </div>
        );
    
}
export default ContentsItem;