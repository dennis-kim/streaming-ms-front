import React from "react";
import {
  BrowserRouter,
  Route
} from 'react-router-dom'
import TopBar from "./container/TopBar/TopBar";
import './style.css';
import MainList from "./container/ContentsList/MainList";

const App = () => {
 



  return (
    <>
      <TopBar />
      <BrowserRouter>
        {/* <Route exact path={["/", "/contents", "/contents/:baseId"]} component={ContentsList} /> */}
        <MainList categoryName={"신규컨텐츠"} categoryId={0} />
        <MainList categoryName={"영화"} categoryId={4} />
        <MainList categoryName={"예능"} categoryId={2} />
        <MainList categoryName={"드라마"} categoryId={1} />
        <MainList categoryName={"애니메이션"} categoryId={3} />
        <MainList categoryName={"다큐멘터리"} categoryId={5} />
      </BrowserRouter>
    </>
  );
}

export default App;