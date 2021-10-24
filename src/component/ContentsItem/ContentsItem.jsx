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

const useStyles = makeStyles({
    root: {
    //   maxWidth: 345,
      width: 345,
      marginRight: '10px'
    },
    media: {
      height: 140,
    },
  });

const ContentsItem = ({ index, item, categoryHide }) => {
    const classes = useStyles();
        return (
            <>
            
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={ index == 0 ? IronmanImage : DefaultImage}
                            title={ item.contentsName }
                        >
                            {
                                categoryHide ? <></> : 
                                <div id="categoryNameCard">
                                    { item.categoryName }
                                </div>
                            }
                        </CardMedia>
                        
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="h2" noWrap={true}>
                                {item.contentsName}
                            </Typography>

                            <Typography variant="body2" color="textSecondary" component="p">
                                코미디
                            </Typography>
                            
                            <Typography variant="body2" color="textSecondary" component="p" noWrap={true}>
                                엠마왓슨 마크러팔러 크리스 에반스 크리스 햄스워스 이연걸
                            </Typography>

                            <Typography id="contentsPath" variant="body2" color="textSecondary" component="p" noWrap={true}>
                                위치: {item.contentsPath}
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
          categoryName: PropTypes.string,
          contentsPath: PropTypes.string,
          genre: PropTypes.string,
        })
    ),
    categoryHide: PropTypes.bool,
}

ContentsItem.defaultProps = {
    item: {
        contentsName: '',
        categoryName: '',
        contentsPath: '',
        genre: ''
    },
    categoryHide: true
}

export default ContentsItem;