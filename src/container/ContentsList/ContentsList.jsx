import React, { useEffect, useState } from "react";
import './style.css'
import ContentsItem from '../../component/ContentsItem/ContentsItem'
import API from '../../api'

const ContentsList = () => {
    const [contents, setContents] = useState([]);
    
    useEffect(() => {
        API.getContents(4)
        .then((result) => {
            console.log(result)
            setContents(result)
        })
        .catch((e) => {
            console.log('error')
        })  
    }, []);

    return (
        <>
            <section className="content_section">
                <div>
                    <ul className="gallery_list">
                        {
                            contents.map((item) => {
                                return (
                                <li>
                                    <ContentsItem contentsName={item[0]}/>
                                </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </section>
        </>
    );
}
  
export default ContentsList;