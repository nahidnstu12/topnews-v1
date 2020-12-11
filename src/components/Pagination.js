import React, { useState } from 'react'
import {useStyles} from '../useStyles'
import {Button, Grid,TextField} from '@material-ui/core'

export const Pagination = () => {
    const [isEditable,setEditable] = useState(false)
    const classes = useStyles()
    return (
        <Grid className={classes.pagination}>
            <Button variant="contained" className={classes.btnStyle}>Prev</Button>
            <Grid className={classes.pageInp}>
                {isEditable ? (<TextField value="1" type="number"/>)
                :
                (<p onDoubleClick={()=>setEditable(!isEditable)}>
                {1} of {100} <br/>
                <small>Double tap to edit</small>
                </p>)               
                }
                
            </Grid>
            <Button variant="contained" className={classes.btnStyle}>Next</Button>
        </Grid>
    )
}
