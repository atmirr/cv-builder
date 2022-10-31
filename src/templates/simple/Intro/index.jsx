import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Box, Avatar } from "@material-ui/core";
import { Email, PhoneIphone, Public } from "@material-ui/icons";
import SampleAvatar from "@images/sample-avatar.jpg";
import TypographyField from "@components/TypographyField";

const styles = ({ spacing, palette }) => ({
  root: {
    padding: spacing(3, 2),
    border: "1px solid #479099", // TODO: Remove me!
  },
  nameWrapper: {
    width: "100%",
  },
  name: {
    textTransform: "uppercase",
  },
  positionWrapper: {
    width: "100%",
    paddingBottom: spacing(1.25),
  },
  position: {
    color: palette.primary.main,
  },
  avatar: {
    width: 150,
    height: 150,
  },
  bioWrapper: {
    width: "70%",
    paddingBottom: spacing(1.25),
  },
  contactInfo: {
    padding: spacing(1.75),
    color: palette.info.contrastText,
    backgroundColor: palette.primary.main,
  },
  icon: {
    color: palette.info.contrastText,
    paddingRight: spacing(0.25),
  },
});

function Intro({ classes }) {
  return (
    <>
      <Box className={classes.root}>
        <Grid container>
          <Grid container item xs={10}>
            {/* Pass the wrappers to the TypographyField as a prop */}
            <Grid item className={classes.nameWrapper}>
              <TypographyField
                id="name"
                variant="h1"
                className={classes.name}
              />
            </Grid>
            <TypographyField
              id="position"
              variant="h4"
              className={classes.position}
              wrapperClassName={classes.positionWrapper}
            />
          </Grid>
          <Grid container item justifyContent="center" xs={2}>
            <Avatar
              alt="Avatar"
              src={SampleAvatar}
              className={classes.avatar}
            />
          </Grid>
        </Grid>
        <Grid className={classes.bioWrapper}>
          <TypographyField id="bio" variant="body1" />
        </Grid>
      </Box>
      <Grid container className={classes.contactInfo}>
        <Grid xs container item alignItems="center">
          <Box>
            <PhoneIphone color="primary" className={classes.icon} />
          </Box>
          <Box>
            {/* TODO: Should be clickable */}
            <TypographyField id="phone" variant="subtitle2" />
          </Box>
        </Grid>
        <Grid xs container item alignItems="center">
          <Email color="primary" className={classes.icon} />
          {/* TODO: Should be clickable */}
          <TypographyField id="email" variant="subtitle2" />
        </Grid>
        <Grid xs container item alignItems="center">
          <Public color="primary" className={classes.icon} />
          <TypographyField id="location" variant="subtitle2" />
        </Grid>
      </Grid>
    </>
  );
}

export default withStyles(styles, {
  withTheme: true,
  name: "Intro",
})(Intro);
