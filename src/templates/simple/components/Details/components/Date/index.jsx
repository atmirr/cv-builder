import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { DateRange } from '@material-ui/icons';
import TypographyField from '@components/TypographyField';

const useStyles = makeStyles(({ spacing, palette }) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    paddingRight: spacing(),
  },
  icon: {
    color: palette.lightText,
    marginRight: spacing(0.25),
  },
  value: {
    color: palette.lightText,
  },
}));

function Date() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <DateRange fontSize="small" className={classes.icon} />
      <TypographyField id="date" variant="caption" className={classes.value} />
    </Box>
  );
}

export default Date;
