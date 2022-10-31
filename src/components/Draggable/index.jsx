import React from "react";
import { Draggable as DndDraggable } from "react-beautiful-dnd";
import DragHandlerIcon from "@assets/images/drag-handler-icon.svg";

function Draggable({ children, id, index, className }) {
  return (
    <DndDraggable draggableId={id} index={Number(index)}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          style={provided.draggableProps.style}
          className={className}
        >
          <div {...provided.dragHandleProps}>
            <img src={DragHandlerIcon} alt="Drag handler" />
          </div>
          {children}
        </div>
      )}
    </DndDraggable>
  );
}

export default Draggable;
