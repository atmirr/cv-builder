import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import TypographyField from '@components/TypographyField';

const useStyles = makeStyles(({ spacing, border }) => ({
  root: {
    padding: spacing(2, 2, 0, 2),
    borderBottom: border.header,
  },
  header: {
    textTransform: 'uppercase',
  },
}));

function Header({ id }) {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <TypographyField id={id} variant="h2" className={classes.header} />
    </Box>
  );
}

export default Header;
