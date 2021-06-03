import React from "react";
import './style.css'
import '../../component/SearchBar/SearchBar'
import SearchBar from "../../component/SearchBar/SearchBar";

const TopBar = () => {
 
    return (
        <>
            <div className="TopBar">
                <SearchBar/>
            </div>
            <div></div>
        </>
    );
}
  
export default TopBar;