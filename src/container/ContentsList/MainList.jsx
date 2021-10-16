import React from "react";
import './MainListStyle.css';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import HorizontalList from "./HorizontalList";

const MainList = ({ categoryName, categoryId }) => {
        return (
            <div style={{ marginTop: "20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginRight: "20px" }}>
                    <div id="FontCategory">
                        { categoryName }
                    </div>
                    <Link to="#" id="FontMore">more</Link>
                </div>
                <HorizontalList 
                    categoryId={categoryId}
                />
            </div>
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