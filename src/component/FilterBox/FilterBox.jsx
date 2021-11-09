import React from 'react';
import Select from 'react-select';

const options = [
    { value: 'chocolateㅁㅁㅁ', label: '영화' },
    { value: 'strawberry', label: '예능' },
    { value: 'vanilla', label: '드라마' }
  ]

const FilterBox = () => {

    return (
        <div className="filterbox_container">
            <Select options={options}/>
        </div>
    );
}
export default FilterBox;