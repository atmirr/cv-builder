import React, { lazy } from "react";
import { useSelector } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { selectSection } from "@slices/layouts";
import Draggable from "@components/Draggable";

const styles = () => ({});

const templateName = "simple";

const Intro = lazy(() =>
  import(
    /* webpackChunkName: "introSection" */
    `@templates/${templateName}/Intro`
  )
);

const Experiences = lazy(() =>
  import(
    /* webpackChunkName: "experiencesSection" */
    `@templates/${templateName}/Experiences`
  )
);

const sectionComponents = {
  intro: Intro,
  experiences: Experiences,
};

function SectionDraggable({ id, index }) {
  const section = useSelector(selectSection(id));
  const Section = sectionComponents[id];
  // const { hide } = section;
  return (
    <Draggable id={id} index={index}>
      <Section />
    </Draggable>
  );
}

export default withStyles(styles, {
  withTheme: true,
  name: "SectionDraggable",
})(SectionDraggable);
