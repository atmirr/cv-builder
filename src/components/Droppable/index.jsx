import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { Droppable as DndDroppable } from "react-beautiful-dnd";

const useStyles = makeStyles(() => ({}));

function Droppable({ id, grids, type, children }) {
  // const classes = useStyles();
  return (
    <DndDroppable droppableId={id} type={type}>
      {(provided) => (
        <Grid
          ref={provided.innerRef}
          item
          xs={grids}
          {...provided.droppableProps}
        >
          {children}
          {provided.placeholder}
        </Grid>
      )}
    </DndDroppable>
  );
}

export default Droppable;
