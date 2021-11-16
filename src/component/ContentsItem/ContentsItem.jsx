import React from "react";
import './style.css';
import PropTypes from 'prop-types';
import DefaultImage from './images/default.jpg';
import IronmanImage from './images/ironman.jpeg';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import moment from "moment";
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        width: '280px',
        marginLeft: '10px',
        marginRight: '10px'
    },
    rootMobile: {
        width: '250px',
        marginLeft: '10px',
        marginRight: '10px'
    },
  });

const ContentsItem = ({ index, item, categoryHide }) => {
    const classes = useStyles();
    const isMobile = useMediaQuery("(max-width: 320px)");
    const isMobileForFold = useMediaQuery("(max-width: 740px)");

    const THUMBNAIL_DEFAULT_URL = 'https://msnas.i234.me/streaming/etc/default.jpg'

    // 7일 이내 업데이트 된 컨텐츠이면 new 아이콘 표시
    const limitDays = -4
    const contentsDate = moment(item.modifyDate)
    const numberOfDay = contentsDate.diff(moment.now(), 'days')
        return (
            <>
                <Card className={isMobile ? classes.rootMobile : classes.root}>
                    <CardActionArea style={{ background: '#E7E7E7' }}>
                        <CardMedia
                            style={{ height: '140px' }}
                            image={ item.thumbnailURL === '-' ? THUMBNAIL_DEFAULT_URL : item.thumbnailURL }
                            title={ item.contentsName }
                        >
                            {
                                categoryHide ? <></> : 
                                <div id="categoryNameCard">
                                    { item.categoryName }
                                </div>
                            }

                            {
                                numberOfDay > limitDays ? 
                                    <div id="newCard">new</div> 
                                    : 
                                    <></>
                            }
                        </CardMedia>
                        
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="h2" noWrap={true}>
                                {item.contentsName}
                            </Typography>

                            <Typography gutterBottom variant="subtitle2" noWrap={true}>
                                {item.subContentsName ? item.subContentsName : '-'}
                            </Typography>

                            <hr style={{ border: 'solid 0.1em #DCDCDC' }}/>

                            <Typography variant="body2" color="textSecondary" component="p">
                                {item.genre}
                            </Typography>
                            
                            <Typography variant="body2" color="textSecondary" component="p" noWrap={true}>
                                {item.actors}
                            </Typography>

                            <Typography id="contentsPath" variant="body2" color="textSecondary" component="p" noWrap={true}>
                                위치:{item.contentsPath}
                            </Typography> 
                        
                        </CardContent>
                    </CardActionArea>
                </Card>
            </>
        );
    
}

ContentsItem.propType = {
    index: PropTypes.number,
    item: PropTypes.objectOf(
        PropTypes.shape({
          contentsName: PropTypes.string,
          subContentsName: PropTypes.string,
          genre: PropTypes.string,
          actors: PropTypes.string,
          categoryName: PropTypes.string,
          contentsPath: PropTypes.string,
          genre: PropTypes.string,
          thumbnailURL: PropTypes.string,
          modifyDate: PropTypes.string
        })
    ),
    categoryHide: PropTypes.bool,
}

ContentsItem.defaultProps = {
    item: {
        contentsName: '-',
        subContentsName: '-',
        genre: '-',
        actors: '-',
        categoryName: '',
        thumbnailURL: '-',
        contentsPath: '-',
        genre: '-',
        modifyDate: '-'
    },
    categoryHide: true
}

export default ContentsItem;