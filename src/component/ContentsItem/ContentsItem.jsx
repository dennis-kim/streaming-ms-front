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

                            {
                                <div id="newCard">
                                    new
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
                                {item.actors}
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
          actors: PropTypes.string,
          categoryName: PropTypes.string,
          contentsPath: PropTypes.string,
          genre: PropTypes.string,
        })
    ),
    categoryHide: PropTypes.bool,
}

ContentsItem.defaultProps = {
    item: {
        contentsName: '-',
        actors: '-',
        categoryName: '',
        contentsPath: '-',
        genre: '-'
    },
    categoryHide: true
}

export default ContentsItem;