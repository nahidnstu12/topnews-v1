import React, { useState } from 'react';
import { useStyles } from '../useStyles';
import { Button, Grid, TextField } from '@material-ui/core';

export const Pagination = ({
  next,
  prev,
  isNext,
  isPrev,
  currentPage,
  gotoPage,
  totalPage,
  handlePageNumber,
}) => {
  const [isEditable, setEditable] = useState(false);
  const classes = useStyles();
  return (
    <Grid className={classes.pagination}>
      {totalPage && (
        <>
          <Button
            variant='contained'
            className={classes.btnStyle}
            onClick={() => prev()}
            disabled={!isPrev}
          >
            Prev
          </Button>
          <Grid className={classes.pageInp}>
            {isEditable ? (
              <TextField
                value={currentPage}
                type='number'
                onChange={e => handlePageNumber(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    setEditable(false);
                    gotoPage();
                  }
                }}
              />
            ) : (
              <p onDoubleClick={() => setEditable(!isEditable)}>
                {currentPage} of {totalPage} <br />
                <small>Double tap to edit</small>
              </p>
            )}
          </Grid>
          <Button
            variant='contained'
            className={classes.btnStyle}
            onClick={() => next()}
            disabled={!isNext}
          >
            Next
          </Button>
        </>
      )}
    </Grid>
  );
};
