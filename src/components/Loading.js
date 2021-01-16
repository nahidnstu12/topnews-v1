import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { useStyles } from '../useStyles';

export const Loading = () => {
  const classes = useStyles();
  return (
    <div className={classes.loading}>
      <strong>Loading...</strong>
      <CircularProgress style={{ color: '#333' }} />
    </div>
  );
};
