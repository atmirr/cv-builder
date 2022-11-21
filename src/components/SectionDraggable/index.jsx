import React from "react";
import { useSelector } from "react-redux";
import { selectSection } from "@slices/layouts";
import Draggable from "@components/Draggable";

const templateName = "simple";

const Intro = React.lazy(() =>
  import(
    /* webpackChunkName: "introSection" */
    `@templates/${templateName}/Intro`
  )
);

const Experiences = React.lazy(() =>
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

export default SectionDraggable;
