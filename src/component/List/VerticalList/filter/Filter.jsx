import React from "react";
import PropTypes from 'prop-types';
import API from '../../../../api';
import './style.css';
import Button from '../../../Button/OnAndOff/OnAndOffButton';

const Series = ({ categoryId }) => {
    
    const [genreList, setGenreList] = React.useState([]);

    React.useEffect(() => {
        getGenres();
    }, []);

    

    const [seriesList, setSeriesList] = React.useState([
        {
            seriesName: '마블',
            isClick: false
        },
        {
            seriesName: 'DC',
            isClick: false
        },
        {
            seriesName: '강철비',
            isClick: false
        }
    ]);

    const getGenres = () => {
        API.getGenres(categoryId)
            .then((result) => {
                setGenreList(result.genres);
            })
            .catch((e) => {
                console.log('err:', e)
            })
    }


    const selectedGenre = (index) => {
        let newGenreList = genreList.map((item, i) => {
            if (index == i) {
              return { ...item, isClick: !genreList[index].isClick };
            } else {
              return { ...item, isClick: false };
            }
        });
        setGenreList(newGenreList);

        selectedSeries(-1);
    }

    const selectedSeries = (index) => {
        let newSeriesList = seriesList.map((item, i) => {
            if (index == i) {
              return { ...item, isClick: !seriesList[index].isClick };
            } else {
              return { ...item, isClick: false };
            }
        });
        setSeriesList(newSeriesList);
    }

    const handlerGenreClick = (index) => {
        selectedGenre(index);
    }

    const handlerSeriesClick = (index) => {
        selectedSeries(index);
    }

    return (
        <>

            <div>
                {/* <div id="FilterTitle">
                    장르
                </div> */}
                <div>
                    {
                        genreList.map((item, index) => {
                            return (
                                <div key={index} style={{ float:'left', padding:'5px' }}>
                                    <Button key={index} title={item.genre} selected={item.isClick} handlerClick={() => handlerGenreClick(index)}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div style={{ paddingTop: '15px', clear:'both' }} >
                {/* <div id="FilterTitle">
                    시리즈
                </div> */}
                <div>
                    {
                        seriesList.map((item, index) => {
                            return (
                                <div key={index} style={{ float: 'left', padding: '5px' }}>
                                    <Button key={index} title={item.seriesName} selected={item.isClick} handlerClick={() => handlerSeriesClick(index)}/>
                                </div>
                            )
                        })
                    }
                </div>
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