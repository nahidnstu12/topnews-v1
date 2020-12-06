import React from 'react'
import {useStyles} from '../useStyles'
import {Grid,Button} from '@material-ui/core'
import {categoryList as list} from '../data/lists'

export const CategoryList = () => {
    console.log((list));
    const classes = useStyles()
    return (
        <Grid item xs={12} style={{ marginBottom:'12px'}}>
            {Object.values(list).map((itm,ind)=>
            <Button variant="contained" color="primary" key={ind} className={classes.catBtn}>
                {itm}
            </Button>)}
        </Grid>
    )
}

