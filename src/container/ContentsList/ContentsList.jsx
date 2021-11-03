import React from "react";
import PropTypes from 'prop-types';
import VerticalList from "../../component/List/VerticalList/VerticalList";

const ContentsList = ({ match, history }) => {

    const categoryId = match.params.categoryId ? match.params.categoryId : 0
    if( categoryId > 5 ) {
        // 허용 카테고리 외 번호 입력시 강제 뒤로가기
        history.goBack();
    }

    return (
        <>
            <VerticalList categoryId={categoryId}/>
        </>
    );
}

ContentsList.propType = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            baseId : PropTypes.number
        })
    })
}

ContentsList.defaultProps = {
    match: {
        params: {
            categoryId: 0
        }
    }
}
  
export default ContentsList;