import React from "react";
import TopBar from "./container/TopBar/TopBar";
import ContentsList from './container/ContentsList/ContentsList';
import './style.css'

const App = () => {
 
  return (
    <>
      <div>
        <TopBar />
        <ContentsList/>
        
      </div>
    </>
  );
}

export default App;