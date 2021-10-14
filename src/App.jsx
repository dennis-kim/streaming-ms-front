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
        
        <div style={{  }}>{/* 전체 목록 */}
          <p id="FontTitle">업데이트</p>
          <Route exact path={["/", "/contents", "/contents/:baseId"]} component={HorizontalList}  />
        </div>

        <div style={{ marginTop: '100px'}}>
          <p id="FontTitle">영화</p>
          <Route exact path={["/", "/contents", "/contents/:baseId"]} component={HorizontalList} />
        </div>

        <div style={{ marginTop: '100px'}}>
          <p id="FontTitle">예능</p>
          <Route exact path={["/", "/contents", "/contents/:baseId"]} component={HorizontalList} />
        </div>

        <div style={{ marginTop: '100px'}}>
          <p id="FontTitle">드라마</p>
          <Route exact path={["/", "/contents", "/contents/:baseId"]} component={HorizontalList} />
        </div>

        <div style={{ marginTop: '100px'}}>
          <p id="FontTitle">애니메이션</p>
          <Route exact path={["/", "/contents", "/contents/:baseId"]} component={HorizontalList} />
        </div>

        <div style={{ marginTop: '100px'}}>
          <p id="FontTitle">다큐멘터리</p>
          <Route exact path={["/", "/contents", "/contents/:baseId"]} component={HorizontalList} />
        </div>
        
      </BrowserRouter>
    </>
  );
}

export default App;