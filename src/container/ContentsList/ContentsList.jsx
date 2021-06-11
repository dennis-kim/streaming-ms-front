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

    const [contents, setContents] = useState([]);



    const getContents = (baseId) => {
        API.getContents(4, sort, order, page, size)
        .then((result) => {
            setContents(result)
            console.log('api')
        })
        .catch((e) => {
            console.log('err')
        })

        setPage(page+1)
    }
    
    const sample  = [
        ['aaa'],
        ['bbb'],
        ['ccc'],
        ['ddd'],
        ['eee'],
        ['fff'],
        ['ggg'],
        ['hhh']
    ]
    
    /* fake async fetch */
    const fakeFetch = (delay = 1000) => new Promise(res => setTimeout(res, delay));


    const [intersectState, setIntersectState] = useState(
        { 
            itemCount: sample,
            isLoading: false 
        }
    );

    const fetchItems = async () => {
        setIntersectState(prev => ({ ...prev, isLoading: true }));
        await fakeFetch();


        // this.setState({ myArray: [...this.state.myArray, 'new value'] })
        setIntersectState(prev => ({
        itemCount: itemCount.push(sample),
        isLoading: false
        }));
        // console.log('###', itemCount.length)
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

    const { itemCount, isLoading } = intersectState;
    if (!itemCount) return null;

    if("/" === match.url){
        document.location.href = '/contents'
    }
    
    return (
        <>
            <section className="content_section">
                <div>
                    <ul className="gallery_list">


                        {[...Array(itemCount)].map((_, i) => {
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