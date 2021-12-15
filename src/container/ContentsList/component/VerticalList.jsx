import React from "react";
import PropTypes from 'prop-types';
import './style.css'
import ContentsItem from "../../../component/ContentsItem/ContentsItem";
import API from '../../../api';
import Filter from "./filter/Filter";

const VerticalList = ({ categoryId }) => {

    const [contents, setContents] = React.useState([]);
    const [seriesId, setSeriesId] = React.useState(0);

    React.useEffect(() => {
        getContentsList();
      }, []);
    
    const getContentsList = () => {
        API.getContents(categoryId, seriesId, 'contents_name', 'asc', 1, 500)
            .then((result) => {
                setContents(result.contents);
            })
            .catch((e) => {
                console.log('err:', e)
            })
    }

    const refreshList = () => {
        getContentsList();
    }

    return (
        <>
            <div style={{ padding: '10px' }}>
                <Filter categoryId={categoryId} refreshList={refreshList} setSeriesId={setSeriesId} />
            </div>

            <div className="list_container">
                <ul className="contents">
                    {contents.map((item, index) => <li key={index}><ContentsItem key={index} index={index} item={item} categoryHide={categoryId!=0} /></li> )}
                </ul>
            </div>
        </>
    );
}

VerticalList.propType = {
    categoryId: PropTypes.number.isRequired
}
  
VerticalList.defaultProps = {
    categoryId : 0
}

export default VerticalList;