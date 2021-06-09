import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'
import './style.css'
import PropTypes from 'prop-types';
import ContentsItem from '../../component/ContentsItem/ContentsItem'
import API from '../../api'

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const ContentsList = ({match}) => {
    const query = useQuery();
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

    if("/" === match.url){
        document.location.href = '/contents'
    }
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

ContentsList.propType = {
    match: PropTypes.shape({
        url: PropTypes.string,
        params: PropTypes.shape({
            baseId : PropTypes.number
        })
    })
}

ContentsList.defaultProps = {

}
  
export default ContentsList;