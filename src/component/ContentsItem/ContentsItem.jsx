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

const ContentsItem = ({ index, contentsName }) => {
    const classes = useStyles();
        return (
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image={ index == 0 ? IronmanImage : DefaultImage}
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    {/* {contentsName} */}
                        아이언맨
                    </Typography>
                    
                    <Typography variant="body2" color="textSecondary" component="p">
                        {/* {contentsName} */}
                        2011 액션<br/>
                        엠마왓슨 마크러팔러 크리스 에반스 크리스 햄스워스 이연걸<br/>
                        영화&gt;2011
                    </Typography> 
                    
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    
}

ContentsItem.propType = {
    index: PropTypes.number,
    contentsName: PropTypes.string
}

ContentsItem.defaultProps = {

}

export default ContentsItem;