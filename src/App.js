import React from "react";
import { useSelector } from "react-redux";
import { selectSetting } from "@slices/settings";
import { withStyles } from "@material-ui/core/styles";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { Box } from "@material-ui/core";
import Theme from "./Theme";
import Template from "./templates";

const styles = () => ({
  previewContainer: {
    maxWidth: 890,
    margin: "0 auto",
  },
});

function App({ classes }) {
  const primaryColor = useSelector(selectSetting("primaryColor"));
  return (
    <Theme primaryColor={primaryColor}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Box className={classes.previewContainer}>
          <Template />
        </Box>
      </MuiPickersUtilsProvider>
    </Theme>
  );
}

export default withStyles(styles, {
  withTheme: true,
  name: "App",
})(App);
