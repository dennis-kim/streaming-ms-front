import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { fetchMainContentsList, FETCH_MAIN_CONTENTS_LIST } from './reducer/contents';
import ProgressBar from '../../component/ProgressBar/ProgressBar';
import MainList from './component/MainList';
import TopBar from '../TopBar/TopBar';

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
            <ProgressBar isLoading={isLoading}/>
            {
                !isLoading && mainContents && (
                    <>
                        <MainList categoryName={"전체"} categoryId={0} contents={mainContents[0]} />
                        <MainList categoryName={"영화"} categoryId={4} contents={mainContents[4]}/>
                        <MainList categoryName={"예능"} categoryId={2} contents={mainContents[2]}/>
                        <MainList categoryName={"드라마"} categoryId={1} contents={mainContents[1]}/>
                        <MainList categoryName={"애니메이션"} categoryId={3} contents={mainContents[3]}/>
                        <MainList categoryName={"다큐멘터리"} categoryId={5} contents={mainContents[5]}/>
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