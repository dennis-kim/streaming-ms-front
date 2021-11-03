import React from "react";
import PropTypes from 'prop-types';

const ContentsList = ({ match, history }) => {

    const baseId = match.params.baseId ? match.params.baseId : 0
    if( baseId > 5 ) {
        // 허용 카테고리 외 번호 입력시 강제 뒤로가기
        history.goBack();
    }

    return (
        <>
            컨텐츠 리스트
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
            baseId: 0
        }
    }
}
  
export default ContentsList;