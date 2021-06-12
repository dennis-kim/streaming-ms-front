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
    const [page, setPage] = useState('1');
    const [size, setSize] = useState('40');
    const [sort, setSort] = useState('modify_date');
    const [order, setOrder] = useState('desc');

    // const [contents, setContents] = useState([]);



    // const getContents = (baseId) => {
    //     API.getContents(4, sort, order, page, size)
    //     .then((result) => {
    //         setContents(result)
    //         console.log('api')
    //     })
    //     .catch((e) => {
    //         console.log('err')
    //     })

    //     setPage(page+1)
    // }
    
    const sample  = [
        {
            contents_name: '승리호'
        },
        {
            contents_name: '아이언맨'
        },
        {
            contents_name: '어벤져스'
        },
        {
            contents_name: '감자'
        },
    ]
    
    /* fake async fetch */
    const fakeFetch = (delay = 500) => new Promise(res => setTimeout(res, delay));


    const [intersectState, setIntersectState] = useState(
        { 
            contents: [],
            isLoading: false 
        }
    );

    const fetchItems = async () => {
        setIntersectState(prev => ({ ...prev, isLoading: true }));
        await fakeFetch();

        setIntersectState(prev => ({
            contents: contents.push(...sample),
            isLoading: false
        }));
    };

    useEffect(() => {
        // getContents(4)
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
                                    <ContentsItem key={i} index={i} contentsName={i}/>
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