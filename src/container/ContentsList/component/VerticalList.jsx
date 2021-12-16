import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import './style.css'
import { useDispatch, useSelector } from "react-redux"
import { fetchContentsList, FETCH_CONTENTS_LIST } from '../reducer/contents';
import ProgressBar from '../../../component/ProgressBar/ProgressBar';
import ContentsItem from "../../../component/ContentsItem/ContentsItem";
import API from '../../../api';
import Filter from "./filter/Filter";

const VerticalList = ({ categoryId }) => {


    const dispatch = useDispatch()
    const { contents, isLoading } = useSelector(({ contents, loading }) => ({
        contents: contents.contents,
        isLoading: loading[FETCH_CONTENTS_LIST]
    }))
    
    const filter = {
        categoryId: categoryId
        , sort: 'modify_date'
        , order: 'desc'
        , page: 1
        , size: 700
        , series: 0
    }
    useEffect(() => {
        dispatch(fetchContentsList(filter))
    }, [dispatch])

    return (
        <>
            <div style={{ padding: '10px' }}>
                {/* <Filter categoryId={categoryId} refreshList={refreshList} setSeriesId={setSeriesId} /> */}
            </div>

            <div className="list_container">
                <ul className="contents">
                    { contents && contents.map((item, index) => <li key={index}><ContentsItem key={index} index={index} item={item} categoryHide={categoryId!=0} /></li> )}
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