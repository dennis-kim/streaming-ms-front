import React from "react";
import {useMediaQuery} from 'react-responsive'
import TopBar from "./container/TopBar/TopBar";
import './style.css'

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ query: "(min-width: 769px)" })
  return isDesktop ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ query: "(min-width:361px) and (max-width:768px)" })
  return isTablet ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ query: "(max-width:360px)" })
  return isMobile ? children : null
}

const App = () => {
 
  return (
    <>
      <div>
        <TopBar />
        <Desktop>
          Desktop or laptop
        </Desktop>
        <Tablet>Tablet</Tablet>
        <Mobile>Mobile</Mobile>
        
      </div>
    </>
  );
}

export default App;