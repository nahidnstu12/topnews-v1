import React, { useState } from 'react'
import {useStyles} from '../useStyles'
import {Button, Grid,TextField} from '@material-ui/core'

export const Pagination = ({next,prev,isNext,isPrev,currentPage,gotoPage,totalPage}) => {
    const [isEditable,setEditable] = useState(false)
    const classes = useStyles()
    return (
       
        <Grid className={classes.pagination}>
        {totalPage &&(
            <>
            <Button variant="contained" className={classes.btnStyle} onClick={()=> prev()} disabled ={!isPrev}
            >Prev</Button>
            <Grid className={classes.pageInp}>
                {isEditable ? (<TextField value={currentPage} type="number" onChange={e => gotoPage(e.target.value)}/>)
                :
                (<p onDoubleClick={()=>setEditable(!isEditable)}>
                {currentPage} of {totalPage} <br/>
                <small>Double tap to edit</small>
                </p>)               
                }
                
            </Grid>
            <Button variant="contained" className={classes.btnStyle} onClick={()=> next()} disabled ={!isNext}
            >Next</Button>
            </>
        )}
        </Grid>
       
       
    )
            
}
