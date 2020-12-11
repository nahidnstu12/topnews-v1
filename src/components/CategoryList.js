import React from 'react'
// import {useStyles} from '../useStyles'
import {Grid,Button,makeStyles} from '@material-ui/core'
import {categoryList as list} from '../data/lists'

const useStyles = makeStyles(theme =>({
    catBtn:{
        margin:'7px',
        color:'black',
        borderColor:'#b8a8a8',
        padding: '5px 15px',
        fontSize: '0.875rem',
        [theme.breakpoints.down('xs')]:{
            fontSize:'11px',
            margin:'3px',
            padding:'5px',
        }
    },
    CountNews:{
        display:'flex',
        justifyContent:'space-between',
        color:'#564c4c'
    },
}))
export const CategoryList = ({selected}) => {
    const classes = useStyles()
    return (
        <Grid item xs style={{ marginBottom:'12px'}}>
            {Object.values(list).map((itm,ind)=>
                <Button variant={selected === itm ? 'contained' : 'outlined'} color="secondary" key={ind} className={classes.catBtn}>
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

