import React from "react";
import {
  BrowserRouter,
  Route
} from 'react-router-dom'
import TopBar from "./container/TopBar/TopBar";
import ContentsList from './container/ContentsList/ContentsList';
import HorizontalList from "./container/ContentsList/HorizontalList";
import './style.css'

const App = () => {
 



  return (
    <>
      <TopBar />
      <BrowserRouter>
        {/* <Route exact path={["/", "/contents", "/contents/:baseId"]} component={ContentsList} /> */}
        
        <div style={{ marginTop: "20px" }}>
          <div id="FontTitle">업데이트</div>
          <div id="MainList">
            <Route exact path={["/", "/contents", "/contents/:baseId"]} component={HorizontalList}  />
          </div>
        </div>

        <div style={{ marginTop: "20px" }}>
          <div id="FontTitle">영화</div>
          <div id="MainList">
            <Route exact path={["/", "/contents", "/contents/:baseId"]} component={HorizontalList}  />
          </div>
        </div>

        <div style={{ marginTop: "20px" }}>
          <div id="FontTitle">예능</div>
          <div id="MainList">
            <Route exact path={["/", "/contents", "/contents/:baseId"]} component={HorizontalList}  />
          </div>
        </div>

        <div style={{ marginTop: "20px" }}>
          <div id="FontTitle">드라마</div>
          <div id="MainList">
            <Route exact path={["/", "/contents", "/contents/:baseId"]} component={HorizontalList}  />
          </div>
        </div>

        <div style={{ marginTop: "20px" }}>
          <div id="FontTitle">애니메이션</div>
          <div id="MainList">
            <Route exact path={["/", "/contents", "/contents/:baseId"]} component={HorizontalList}  />
          </div>
        </div>

        <div style={{ marginTop: "20px" }}>
          <div id="FontTitle">다큐멘터리</div>
          <div id="MainList">
            <Route exact path={["/", "/contents", "/contents/:baseId"]} component={HorizontalList}  />
          </div>
        </div>
        
        
      </BrowserRouter>
    </>
  );
}

export default App;