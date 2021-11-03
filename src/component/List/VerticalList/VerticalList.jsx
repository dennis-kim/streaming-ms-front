import React from "react";
import PropTypes from 'prop-types';
import ContentsItem from "../../ContentsItem/ContentsItem";
import { display } from "@mui/system";

const VerticalList = ({ categoryId }) => {


    const contents = [
        {
            contentsName: '-',
            actors: '-',
            categoryName: '',
            contentsPath: '-',
            genre: '-',
            modifyDate: '2021-11-02'
        },
        {
            contentsName: '-',
            actors: '-',
            categoryName: '',
            contentsPath: '-',
            genre: '-',
            modifyDate: '2021-11-02'
        },
        {
            contentsName: '-',
            actors: '-',
            categoryName: '',
            contentsPath: '-',
            genre: '-',
            modifyDate: '2021-11-02'
        },
        {
            contentsName: '-',
            actors: '-',
            categoryName: '',
            contentsPath: '-',
            genre: '-',
            modifyDate: '2021-11-02'
        },
        {
            contentsName: '-',
            actors: '-',
            categoryName: '',
            contentsPath: '-',
            genre: '-',
            modifyDate: '2021-11-02'
        },
        {
            contentsName: '-',
            actors: '-',
            categoryName: '',
            contentsPath: '-',
            genre: '-',
            modifyDate: '2021-11-02'
        },
        {
            contentsName: '-',
            actors: '-',
            categoryName: '',
            contentsPath: '-',
            genre: '-',
            modifyDate: '2021-11-02'
        },
        {
            contentsName: '-',
            actors: '-',
            categoryName: '',
            contentsPath: '-',
            genre: '-',
            modifyDate: '2021-11-02'
        },
        {
            contentsName: '-',
            actors: '-',
            categoryName: '',
            contentsPath: '-',
            genre: '-',
            modifyDate: '2021-11-02'
        },
        {
            contentsName: '-',
            actors: '-',
            categoryName: '',
            contentsPath: '-',
            genre: '-',
            modifyDate: '2021-11-02'
        },
        {
            contentsName: '-',
            actors: '-',
            categoryName: '',
            contentsPath: '-',
            genre: '-',
            modifyDate: '2021-11-02'
        },
    ]


    return (
        <div style={{display:'flex'}}>
            {contents.map((item, index) => <ContentsItem key={index} index={index} item={item} /> )}
        </div>
    );
}


VerticalList.propType = {
    categoryId: PropTypes.number.isRequired
}
  
VerticalList.defaultProps = {
    categoryId : 0
}
  
export default VerticalList;