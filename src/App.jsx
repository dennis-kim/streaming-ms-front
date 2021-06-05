import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import TopBar from "./container/TopBar/TopBar";
import ContentsList from './container/ContentsList/ContentsList';
import './style.css'

const App = () => {
 
  return (
    <>
      <TopBar />

      <Router>
          <Switch>
            <Route exact path={["/", "/contents/:baseId"]}>
              <ContentsList/>
            </Route>
          </Switch>
      </Router>
    </>
  );
}

export default App;