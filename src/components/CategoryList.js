import React from 'react'
import {useStyles} from '../useStyles'
import {Grid,Button} from '@material-ui/core'
import {categoryList as list} from '../data/lists'

export const CategoryList = ({selected}) => {
    const classes = useStyles()
    return (
        <Grid item xs={12} style={{ marginBottom:'12px'}}>
            {Object.values(list).map((itm,ind)=>
                <Button variant={selected === itm ? 'contained' : 'outlined'} color="primary" key={ind} className={classes.catBtn} >
                    {itm}
                </Button>
            )}
            
            <CountNews />
        </Grid>
    )
}


const CountNews = () => {
    const classes = useStyles()
    return(
        <Grid className={classes.CountNews}>
            <p>Found 3456 Results</p>
            <p>1 of 231 pages</p>
        </Grid>
    )
}

