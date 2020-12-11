import React from 'react'
import {useStyles} from '../useStyles'
import {Card,CardActionArea,CardMedia,CardContent,Typography,CardActions,Button} from '@material-ui/core'

function getDateString(date){
	return new Date(date).toDateString()
}
export const News = ({img,title,url,description,published,content,author}) => {
  const classes = useStyles()
    return (
        <a href={url} style={{ textDecoration: "none"}} target="_blank" rel="noreferrer noopener">
        <Card style={{ margin: "9px 0"}}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={title}
            height="auto"
            image={img}
            title={description}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" variant="contained" className={classes.btnStyle}>
            {author.substr(0,12)}
          </Button>
          <Typography variant="body1" color="textSecondary" component="p" style={{ marginLeft:'auto'}}>
              {getDateString(published)}
          </Typography>
        </CardActions>
      </Card>
      </a>
    )
}
