import React from 'react'
import {TextField} from '@material-ui/core'

export const Search = ({search}) => {
  // const handleChange = 
  
    return (
        <TextField
          id="standard-full-width"
          label="Search by category or term"
          style={{ margin: 8 }}
          fullWidth
          margin="normal"
          variant="filled"
          onChange={e => search(e.target.value)}
        />
    )
}
