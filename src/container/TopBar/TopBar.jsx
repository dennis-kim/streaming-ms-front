import React, {useState} from "react";
import './style.css'
import FilterBox from '../../component/FilterBox/FilterBox'
import SearchBar from "../../component/SearchBar/SearchBar"
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { rgbToHex } from "@material-ui/core";


const TopBar = () => {
    const [hideOfFilter, setHideOfFilter] = useState(true)
    
    const switchOfFilter = () => {
        setHideOfFilter(!hideOfFilter)
    }

 
    return (
        <>
            <div>
                <div className="menu_box">
                    <SearchBar/>
                    {
                        hideOfFilter ? 
                        <ArrowDropDownIcon id="ArrowIcon" onClick={switchOfFilter}/>
                        : <ArrowDropUpIcon id="ArrowIcon" onClick={switchOfFilter}/>
                    }
                </div>
                <div style={{ display: hideOfFilter ? 'none' : '' }}>
                    <FilterBox/>
                </div>
            </div>
            
        </>
    );
}
  
export default TopBar;