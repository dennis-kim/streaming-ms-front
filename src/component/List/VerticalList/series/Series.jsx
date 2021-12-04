import React from "react";
import PropTypes from 'prop-types';
import './style.css';
import OnAndOffButton from 'component/Button/OnAndOff/OnAndOffButton';
// import OnAndOffButton from '../../../../component/Button/OnAndOff/OnAndOffButton';

const Series = ({ categoryId }) => {

    const [seriesList, setSeriesList] = React.useState([
        {
            seriesName: '마블'
        },
        {
            seriesName: 'DC'
        },
        {
            seriesName: '강철비'
        }
    ]);

    const selectSeries = () => {

    }

    return (
        <>
            <div style={{background:'blue'}}>
                {
                    seriesList.map((item, i) => {
                        return <OnAndOffButton key={i} title={item.seriesName} selected={false} handlerClick={selectSeries}/>
                    })
                }
                
            </div>
        </>
    )
}

Series.propType = {
    categoryId: PropTypes.number.isRequired
}
  
Series.defaultProps = {
    categoryId : 0
}

export default Series;