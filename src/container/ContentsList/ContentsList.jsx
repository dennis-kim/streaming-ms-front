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
    
    
    /* fake async fetch */
    const fakeFetch = (delay = 1000) => new Promise(res => setTimeout(res, delay));
    const [state, setState] = useState({ itemCount: 0, isLoading: false });
    const fetchItems = async () => {
        setState(prev => ({ ...prev, isLoading: true }));
        await fakeFetch();
        setState(prev => ({
        itemCount: prev.itemCount + 10,
        isLoading: false
        }));
    };







    useEffect(() => {
        getContents(4)
        fetchItems();
    }, []);




    const [_, setRef] = useIntersect(async (entry, observer) => {
        observer.unobserve(entry.target);
        await fetchItems();
        observer.observe(entry.target);
      }, {});
    const { itemCount, isLoading } = state;
    if (!itemCount) return null;




    if("/" === match.url){
        document.location.href = '/contents'
    }
    

    


    const ListItem = ({ number }) => (
        <div className="ListItem">
          <span>{number}</span>
        </div>
      );

    return (
        <>
            {/* <section className="content_section">
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
            </section> */}

<div className="App">
      {[...Array(itemCount)].map((_, i) => {
        return (
            // contents.length > 0 ?
            // getContents(4, sort, order, page, size) : <></>
            // console.log('aaa') : console.log('bbb')
            <ListItem key={i} number={i} />
        )
        
      })}
      <div ref={setRef} className="Loading">
        {isLoading && "Loading..."}
      </div>
    </div>
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