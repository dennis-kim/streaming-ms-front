import React from 'react';
import MainList from './component/MainList';

const Main = ({ }) => {

    return (
        <>
            <MainList categoryName={"전체"} categoryId={0} />
            <MainList categoryName={"영화"} categoryId={4} />
            <MainList categoryName={"예능"} categoryId={2} />
            <MainList categoryName={"드라마"} categoryId={1} />
            <MainList categoryName={"애니메이션"} categoryId={3} />
            <MainList categoryName={"다큐멘터리"} categoryId={5} />
        </>
    );
    
}

Main.propType = {
}

Main.defaultProps = {
}

export default Main;