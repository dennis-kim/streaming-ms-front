import React from "react";
import './style.css'
import ContentsItem from '../../component/ContentsItem/ContentsItem'

const ContentsList = () => {
 
    return (
        <>
            <section className="content_section">
                <div>
                    <ul className="gallery_list">
                        <li>
                            <ContentsItem contentsName="아이언맨1"/>
                        </li>
                        <li>
                            <ContentsItem contentsName="아이언맨2"/>
                        </li>
                        <li>
                            <ContentsItem contentsName="아이언맨3"/>
                        </li>
                        <li>
                            <ContentsItem contentsName="아이언맨4"/>
                        </li>
                        <li>
                            <ContentsItem contentsName="아이언맨5"/>
                        </li>
                        
                    </ul>
                </div>
            </section>            
        </>
    );
}
  
export default ContentsList;