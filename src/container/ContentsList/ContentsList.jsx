import React from "react";
import './style.css'



import sub_gallery_01 from './images/p_images/sub_gallery_01.jpg'
import sub_gallery_02 from './images/p_images/sub_gallery_02.jpg'
import sub_gallery_03 from './images/p_images/sub_gallery_03.jpg'
import sub_gallery_04 from './images/p_images/sub_gallery_04.jpg'
import sub_gallery_05 from './images/p_images/sub_gallery_05.jpg'
import sub_gallery_06 from './images/p_images/sub_gallery_06.jpg'
import sub_gallery_07 from './images/p_images/sub_gallery_07.jpg'
import sub_gallery_08 from './images/p_images/sub_gallery_08.jpg'
import sub_gallery_09 from './images/p_images/sub_gallery_09.jpg'
import sub_gallery_10 from './images/p_images/sub_gallery_10.jpg'
import sub_gallery_11 from './images/p_images/sub_gallery_11.jpg'
import sub_gallery_12 from './images/p_images/sub_gallery_12.jpg'


const ContentsList = () => {
 
    return (
        <>
            <section className="content_section">
                <div>
                    <ul className="gallery_list">
                        <li>
                            <div>
                                <img src={sub_gallery_01} alt=""/>
                            </div>
                        </li>
                        <li><img src={sub_gallery_02} alt=""/></li>
                        <li><img src={sub_gallery_03} alt=""/></li>
                        <li><img src={sub_gallery_04} alt=""/></li>
                        <li><img src={sub_gallery_05} alt=""/></li>
                        <li><img src={sub_gallery_06} alt=""/></li>
                        <li><img src={sub_gallery_07} alt=""/></li>
                        <li><img src={sub_gallery_08} alt=""/></li>
                        <li><img src={sub_gallery_09} alt=""/></li>
                        <li><img src={sub_gallery_10} alt=""/></li>
                        <li><img src={sub_gallery_11} alt=""/></li>
                        <li><img src={sub_gallery_12} alt=""/></li>
                    </ul>
                </div>
            </section>            
        </>
    );
}
  
export default ContentsList;