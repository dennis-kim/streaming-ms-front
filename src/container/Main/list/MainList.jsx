import React from "react";
import './MainListStyle.css';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import HorizontalList from "./component/HorizontalList";

const MainList = ({ categoryName, categoryId, contents }) => {
    const limit = 10

    return (
        contents.length > 0 &&
        (
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
        )
    );
    
}

MainList.propType = {
    categoryName: PropTypes.number,
    categoryId: PropTypes.string,
    contents: PropTypes.array
}

MainList.defaultProps = {
    categoryName: '',
    categoryId: 0,
    contents: []
}

export default MainList;