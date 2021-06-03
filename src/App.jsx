import React from "react";
import {useMediaQuery} from 'react-responsive'
import TopBar from "./container/TopBar/TopBar";
import './style.css'

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  return isDesktop ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  return isTablet ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? children : null
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