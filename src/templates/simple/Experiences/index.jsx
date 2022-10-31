import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import Header from "../components/Header";
import TypographyField from "@components/TypographyField";
import FieldsList from "@components/FieldsList";
import Details from "../components/Details";

const styles = ({ spacing, palette }) => ({
  root: {
    border: "1px solid #479099", // TODO: Remove me!
  },
  item: {
    padding: spacing(2),
  },
  roleWrapper: {
    paddingBottom: spacing(0.25),
  },
  companyWrapper: {
    paddingBottom: spacing(0.5),
  },
  company: {
    color: palette.primary.main,
  },
  companyDescriptionWrapper: {
    paddingBottom: spacing(0.75),
  },
  companyDescription: {
    fontWeight: 500,
  },
  experiences: {
    paddingLeft: spacing(2.375),
  },
  experienceItem: {
    paddingBottom: spacing(0.75),
  },
});

function Experiences({ classes }) {
  return (
    <Box className={classes.root}>
      <Header id="experiences-header" />
      {/* TODO: Should write a component called BlocksList on top of the FieldsList */}
      <FieldsList id="experiences" type="BLOCKS">
        <Box className={classes.item}>
          <TypographyField
            id="role"
            variant="h3"
            wrapperClassName={classes.roleWrapper}
          />
          <TypographyField
            id="company"
            variant="subtitle1"
            className={classes.company}
            wrapperClassName={classes.companyWrapper}
          />
          <TypographyField
            id="companyDescription"
            variant="body2"
            className={classes.companyDescription}
            wrapperClassName={classes.companyDescriptionWrapper}
          />
          <Details />
          <Box>
            {/* TODO: Should write another component called FieldsList on top of this and changed the name of this to List (Or sth. like that) */}
            <FieldsList id="activities" type="FIELDS">
              <TypographyField id="activity" variant="body2" />
            </FieldsList>
          </Box>
        </Box>
      </FieldsList>
    </Box>
  );
}

export default withStyles(styles, {
  withTheme: true,
  name: "Experiences",
})(Experiences);
