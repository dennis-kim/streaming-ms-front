import React from "react";
import PropTypes from 'prop-types';
import VerticalList from "./component/VerticalList";

const ContentsList = ({ match, history }) => {

    window.scrollTo(0, 0);

    const categoryId = match.params.categoryId ? match.params.categoryId : 0
    if( categoryId > 5 ) {
        // 허용 카테고리 외 번호 입력시 강제 뒤로가기
        history.goBack();
    }

    const category = {
        0: '전체',
        1: '드라마',
        2: '예능',
        3: '애니메이션',
        4: '영화',
        5: '다큐멘터리' 
    }

    return (
        <>
            <div id="FontCategory">
                {category[categoryId]}
            </div>
            <VerticalList categoryId={4}/>
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