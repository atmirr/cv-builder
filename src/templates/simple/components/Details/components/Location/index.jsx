import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { LocationOn } from '@material-ui/icons';
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

function Location() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <LocationOn fontSize="small" className={classes.icon} />
      <TypographyField
        id="location"
        variant="caption"
        className={classes.value}
      />
    </Box>
  );
}

export default Location;
