import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'
import './style.css'
import ContentsItem from '../../component/ContentsItem/ContentsItem'
import API from '../../api'

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const ContentsList = () => {
    const query = useQuery();
    // console.log("ppp: ", query.get("ppp"))
    const [contents, setContents] = useState([]);
    
    useEffect(() => {
        API.getContents(4, 'modify_date', 'desc')
        .then((result) => {
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
                            contents.map((item, i) => {
                                return (
                                <li key={i}>
                                    <ContentsItem key={i} index={i} contentsName={item[0]}/>
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