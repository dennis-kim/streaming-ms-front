import React from "react"
import './style.css'
import DefaultImage from './images/default.jpg'
import IronmanImage from './images/ironman.jpeg'


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

const ContentsItem = ({ contentsName }) => {
    const classes = useStyles();
        return (
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image={IronmanImage}
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    {/* <Typography gutterBottom variant="h5" component="h2">
                        {contentsName}
                    </Typography> */}
                    
                    <Typography variant="body2" color="textSecondary" component="p">
                        {contentsName}
                    </Typography> 
                    
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    
}
export default ContentsItem;