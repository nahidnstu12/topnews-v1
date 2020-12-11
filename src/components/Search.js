import React from 'react'
import {TextField} from '@material-ui/core'

export const Search = () => {
    return (
        <TextField
          id="standard-full-width"
          label="Search by category or term"
          style={{ margin: 8 }}
          fullWidth
          margin="normal"
          variant="filled"
        />
    )
}
