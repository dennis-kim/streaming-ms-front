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
                            <ContentsItem />
                        </li>

                        <li>
                            <ContentsItem />
                        </li>
                        <li>
                            <ContentsItem />
                        </li>
                        <li>
                            <ContentsItem />
                        </li>

                        <li>
                            <ContentsItem />
                        </li>
                        
                    </ul>
                </div>
            </section>            
        </>
    );
}
  
export default ContentsList;