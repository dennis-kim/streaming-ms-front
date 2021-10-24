import React from "react";
import './MainListStyle.css';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import HorizontalList from "./HorizontalList";
import API from '../../api'

const MainList = ({ categoryName, categoryId }) => {

    const [contents, setContents] = React.useState([]);

    React.useEffect(() => {
        getContentsList();
      }, []);
    
    const getContentsList = () => {
        API.getContentsNew(categoryId, 'modify_date', 'desc', 1, 10)
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
                    <Link to="#" id="FontMore">more</Link>
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