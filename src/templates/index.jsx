import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { map } from "lodash";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { selectCurrentLayout } from "@slices/layouts";
import DragDropContext from "@components/DragDropContext";
import Droppable from "@components/Droppable";
import SectionDraggable from "@components/SectionDraggable";
import { DROPPABLE_TYPE } from "@components/DragDropContext/constants/droppable";

const styles = () => ({});

function Templates() {
  const layout = useSelector(selectCurrentLayout);
  return (
    <Suspense fallback={<React.Fragment />}>
      <DragDropContext>
        <Grid container>
          {map(layout, ({ items: blocks, grids }, droppableId) => (
            <Droppable
              id={droppableId}
              key={droppableId}
              grids={grids}
              type={DROPPABLE_TYPE.SECTIONS}
            >
              {map(blocks, (id, index) => (
                <SectionDraggable id={id} index={index} key={id} />
              ))}
            </Droppable>
          ))}
        </Grid>
      </DragDropContext>
    </Suspense>
  );
}

export default withStyles(styles, {
  withTheme: true,
  name: "Templates",
})(Templates);
