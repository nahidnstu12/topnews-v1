import React from 'react'
// import {useStyles} from '../useStyles'
import {Grid,Button,makeStyles} from '@material-ui/core'
import {categoryItem as list} from '../data/categoryItem'

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

export const CategoryList = ({cat_select,changeCategory,totalNews}) => {
    const classes = useStyles()
    return (
        <Grid item xs style={{ marginBottom:'12px'}}>
            {Object.values(list).map((itm,ind)=>
                <Button variant={cat_select === itm ? 'contained' : 'outlined'}  
                key={ind} 
                className={classes.catBtn} 
                onClick={()=>changeCategory(itm)} 
                color="secondary" 
                style={{color: cat_select === itm ? 'white' : 'black'}}>
                    {itm}
                </Button>
            )}
            
            <CountNews totalNews={totalNews}/>
        </Grid>
    )
}


const CountNews = ({totalNews}) => {
    const classes = useStyles()
    const totalPages = Math.ceil(totalNews/10);


    return(
        <Grid className={classes.CountNews}>
            <p>Found {totalNews} Results</p>
            <p>1 of {totalPages} pages</p>
        </Grid>
    )
}

