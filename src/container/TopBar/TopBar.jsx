import React, {useState} from "react";
import './style.css'
import FilterBox from '../../component/FilterBox/FilterBox'
import Filter from "./Filter/Filter";
import SearchBar from "../../component/SearchBar/SearchBar"
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

const TopBar = ( {match} ) => {
    const [hideOfFilter, setHideOfFilter] = useState(false)
    
    const switchOfFilter = () => {
        setHideOfFilter(!hideOfFilter)
    }

    console.log(match)
    // const categoryId = match.params.categoryId ? match.params.categoryId : 0
    // console.log(match)
 
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
                    {/* <FilterBox/> */}
                    <Filter />
                </div>
            </div>
            
        </>
    );
}
  
export default TopBar;