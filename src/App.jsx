import React from "react";
import {
  BrowserRouter,
  Route
} from 'react-router-dom'
import TopBar from "./container/TopBar/TopBar";
import ContentsList from './container/ContentsList/ContentsList';
import './style.css'

const App = () => {
 
  return (
    <>
      <TopBar />
      <BrowserRouter>
        <Route exact path={["/", "/contents", "/contents/:baseId"]} component={ContentsList} />
      </BrowserRouter>
    </>
  );
}

export default App;