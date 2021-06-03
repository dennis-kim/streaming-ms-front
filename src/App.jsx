import React from "react";
import {useMediaQuery} from 'react-responsive'
import TopBar from "./container/TopBar/TopBar";
import './style.css'

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" })
  return isDesktop ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ query: "(min-width:768px) and (max-width:1023px)" })
  return isTablet ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ query: "(max-width:767px)" })
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