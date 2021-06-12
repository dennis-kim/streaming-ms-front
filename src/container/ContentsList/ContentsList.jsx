import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'
import './style.css'
import PropTypes from 'prop-types';
import ContentsItem from '../../component/ContentsItem/ContentsItem'
import API from '../../api'
import useIntersect from "./useIntersect";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const ContentsList = ({match}) => {
    const query = useQuery();
    const [size, setSize] = useState(20);
    const [sort, setSort] = useState('modify_date');
    const [order, setOrder] = useState('desc');

    /* fake async fetch */
    const fakeFetch = (delay = 1000) => new Promise(res => setTimeout(res, delay));


    const [intersectState, setIntersectState] = useState(
        { 
            contents: [],
            isLoading: false ,
            page: 1,
        }
    );

    const fetchItems = async () => {
        setIntersectState(prev => ({ ...prev, isLoading: true, page: 10}));
        
        await fakeFetch();
        
        API.getContents(4, sort, order, intersectState.page, size)
        .then((result) => {
            setIntersectState(prev => ({
                contents: contents.push(...result),
                isLoading: false,
                page: 30
            }));
            
        })
        .catch((e) => {
            console.log('err:', e)
        })

        
    };

    useEffect(() => {
        fetchItems();
    }, []);

    const [_, setRef] = useIntersect(async (entry, observer) => {
        observer.unobserve(entry.target);
        await fetchItems();
        observer.observe(entry.target);
      }, {});

    const { contents, isLoading } = intersectState;
    if (!contents) return null;

    if("/" === match.url){
        document.location.href = '/contents'
    }
    
    return (
        <>
            <section className="content_section">
                <div>
                    <ul className="gallery_list">
                        {[...Array(contents)].map((_, i) => {
                            return (
                                <li key={i}>
                                    <ContentsItem key={i} index={i} contentsName={contents.length}/>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div ref={setRef} className="Loading">
                    {isLoading && "Loading..."}
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