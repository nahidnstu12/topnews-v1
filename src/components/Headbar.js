import React from 'react'
import {useStyles} from '../useStyles'
import {Grid} from '@material-ui/core'


const Headbar = () => {
    const classes = useStyles();
    return (
        <Grid item className={classes.head1} xs={12}>
            <img src="./img/nb2.png" className={classes.head1Img} alt="brand logo"/>
            <h1>Top News Headlines</h1>
        </Grid>
    )
}

export default Headbar
