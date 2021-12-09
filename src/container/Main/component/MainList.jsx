import React from "react";
import './MainListStyle.css';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import HorizontalList from "../../../component/List/HorizontalList/HorizontalList";
import API from '../../../api'

const MainList = ({ categoryName, categoryId }) => {

    const [contents, setContents] = React.useState([]);
    const limit = 10

    React.useEffect(() => {
        getContentsList();
      }, []);
    
    const getContentsList = () => {
        API.getContents(categoryId, 0, 'modify_date', 'desc', 1, limit)
            .then((result) => {
              setContents(result.contents);
            })
            .catch((e) => {
              console.log('err:', e)
            })
    }

    return (
        contents.length > 0 ?
            <div style={{ marginTop: "20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginRight: "20px" }}>
                    <div id="FontCategory">
                        { categoryName }
                    </div>
                    {
                        contents.length > limit-1 ? <Link to={`/contents/${categoryId}`} id="FontMore">더보기</Link> : <></>
                    }
                </div>
                <HorizontalList
                    categoryId={categoryId}
                    contents={contents}
                />
            </div>
        : <></>
    );
    
}

MainList.propType = {
    categoryName: PropTypes.number,
    categoryId: PropTypes.string
}

MainList.defaultProps = {
    categoryName: '',
    categoryId: 0
}

export default MainList;