import React from "react";
import { Droppable as DndDroppable } from "react-beautiful-dnd";

function Droppable({ id, grids, type, className, children }) {
  return (
    <DndDroppable droppableId={id} type={type}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          className={className}
          {...provided.droppableProps}
        >
          {children}
          {provided.placeholder}
        </div>
      )}
    </DndDroppable>
  );
}

export default Droppable;
