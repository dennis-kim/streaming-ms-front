import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import MainList from './component/MainList';
import TopBar from '../TopBar/TopBar';
import { fetchMainContentsList, FETCH_MAIN_CONTENTS_LIST } from './reducer/contents';

const Main = ({ }) => {

    const dispatch = useDispatch()
    const { mainContents, isLoading } = useSelector(({ mainContents, loading }) => ({
        mainContents: mainContents.contents,
        isLoading: loading[FETCH_MAIN_CONTENTS_LIST]
    }))

    useEffect(() => {
        dispatch(fetchMainContentsList())
    }, [dispatch])



    return (
        <>
            <TopBar />
            {
                isLoading && "...loading" 
            }
            {
                mainContents && (
                    <>
                        <MainList categoryName={"전체"} categoryId={0} mainContents={mainContents[0]} />
                        <MainList categoryName={"영화"} categoryId={4} mainContents={mainContents[4]}/>
                        <MainList categoryName={"예능"} categoryId={2} mainContents={mainContents[2]}/>
                        <MainList categoryName={"드라마"} categoryId={1} mainContents={mainContents[1]}/>
                        <MainList categoryName={"애니메이션"} categoryId={3} mainContents={mainContents[3]}/>
                        <MainList categoryName={"다큐멘터리"} categoryId={5} mainContents={mainContents[5]}/>
                    </>
                )
            }
            
        </>
    );
    
}

Main.propType = {
}

Main.defaultProps = {
}

export default Main;