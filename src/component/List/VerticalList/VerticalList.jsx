import React from "react";
import PropTypes from 'prop-types';
import './style.css'
import ContentsItem from "../../ContentsItem/ContentsItem";
import API from '../../../api'

const VerticalList = ({ categoryId }) => {

    const [contents, setContents] = React.useState([]);

    React.useEffect(() => {
        getContentsList();
      }, []);
    
    const getContentsList = () => {
        API.getContentsNew(categoryId, 'contents_name', 'asc', 1, 500)
            .then((result) => {
              setContents(result.contents);
            })
            .catch((e) => {
              console.log('err:', e)
            })
    }

    return (
        <>
            <div className="container">
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