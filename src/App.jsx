import React from "react";
import {
  BrowserRouter,
  Route
} from 'react-router-dom'
import TopBar from "./container/TopBar/TopBar";
import './style.css';
import Main from './container/Main/Main';
import ContentsList from "./container/ContentsList/ContentsList";

const App = () => {
 



  return (
    <>
      {/* <TopBar /> */}
      <BrowserRouter>
        <Route exact path={["/"]} component={Main} />
        <Route path={["/contents"]} component={ContentsList} exact />
        <Route path={["/contents/:categoryId"]} component={ContentsList} />
      </BrowserRouter>
    </>
  );
}

export default App;