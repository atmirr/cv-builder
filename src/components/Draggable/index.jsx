import React from "react";
import { Draggable as DndDraggable } from "react-beautiful-dnd";
import { ReactComponent as DragHandlerIcon } from "@assets/images/drag-handler-icon.svg";

function Draggable({ children, id, index, className }) {
  return (
    <DndDraggable draggableId={id} index={Number(index)}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          style={provided.draggableProps.style}
          className={`${className} relative`}
        >
          <div {...provided.dragHandleProps} className="absolute top-0 right-0">
            <DragHandlerIcon alt="drag handler" className="fill-black-300" />
          </div>
          {children}
        </div>
      )}
    </DndDraggable>
  );
}

export default Draggable;
