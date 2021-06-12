import React, {useState} from "react";
import './style.css'
import FilterBox from '../../component/FilterBox/FilterBox'
import SearchBar from "../../component/SearchBar/SearchBar"
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';


const TopBar = () => {
    const [hideOfFilter, setHideOfFilter] = useState(false)
    
    const switchOfFilter = () => {
        setHideOfFilter(!hideOfFilter)
    }

 
    return (
        <>
            <div className="topbar_container">
                <div className="menu_box">
                    <SearchBar/>
                    {
                        hideOfFilter ? 
                        <ArrowDropDownIcon style={{fontSize: 40}} onClick={switchOfFilter}/>
                        : <ArrowDropUpIcon style={{fontSize: 40}} onClick={switchOfFilter}/>
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