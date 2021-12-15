import React from "react";
import OnAndOffButton from '../Button/OnAndOff/OnAndOffButton';

const sample = [
    {
      name:'마블',
      code:13
    },
    {
      name:'액션',
      code:12
  
    },
    {
        name:'SF',
        code:11
     },
    {
        name:'용자',
        code:22
     }
]

const CategoryList = () => {

    const [categories,setCategories] = React.useState([])

    sample.map((item, index)=>{
      categories.push({
        name: item.name,
        code: item.code,
        selected: index%2 ==0 ?true:false
      })
    })

    const click = () => {
        categories[0].selected=false
    }

    return (
        <>
            {
                categories.map((item, index) => 
                    <OnAndOffButton handlerClick={click} key={index} title={item.name} selected={item.selected} />
                )
                
            }
        </>
    )
}

export default CategoryList;