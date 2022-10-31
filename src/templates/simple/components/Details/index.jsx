import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import Date from './components/Date';
import Location from './components/Location';

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingBottom: spacing(1),
  },
}));

function Details() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Date />
      <Location />
    </Box>
  );
}

export default Details;
