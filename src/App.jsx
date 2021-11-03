import React from "react";
import {
  BrowserRouter,
  Route
} from 'react-router-dom'
import TopBar from "./container/TopBar/TopBar";
import './style.css';
import Main from './container/Main/Main';

const App = () => {
 



  return (
    <>
      <TopBar />
      <BrowserRouter>
        {/* <Route exact path={["/", "/contents", "/contents/:baseId"]} component={ContentsList} /> */}
        <Route exact path={["/"]} component={Main} />
      </BrowserRouter>
    </>
  );
}

export default App;