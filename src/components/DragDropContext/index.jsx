import React from "react";
import { split, map } from "lodash";
import { DragDropContext as DndDragDropContext } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { reorder as sectionsReorder, move } from "@slices/layouts";
import { reorder as fieldsReorder } from "@slices/fields";
import { DROPPABLE_TYPE } from "./constants/droppable";

function DragDropContext({ children, props }) {
  const dispatch = useDispatch();
  const generateFieldPath = (id) => {
    const splittedId = split(id, "_");
    const path = map(splittedId, (id) => {
      const numberRegex = /^\d+$/;
      const isNumber = numberRegex.test(id);
      if (isNumber) {
        return Number(id);
      }
      return id;
    });
    return path;
  };
  const reorder = (type) => (params) => {
    switch (type) {
      case DROPPABLE_TYPE.SECTIONS:
        dispatch(sectionsReorder(params));
        break;

      case DROPPABLE_TYPE.BLOCKS:
        dispatch(fieldsReorder(params));
        break;

      case DROPPABLE_TYPE.FIELDS:
        dispatch(fieldsReorder(params));
        break;

      default:
        break;
    }
  };
  function onDragEnd(result) {
    const { source, destination, type } = result;

    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      if (destination.index === source.index) {
        return;
      } else {
        reorder(type)({
          droppablePath: generateFieldPath(source.droppableId),
          startIndex: source.index,
          endIndex: destination.index,
        });
      }
    } else {
      if (type === DROPPABLE_TYPE.SECTIONS) {
        dispatch(
          move({
            droppableSourceId: source.droppableId,
            droppableDestinationId: destination.droppableId,
            startIndex: source.index,
            endIndex: destination.index,
          })
        );
      }
    }
  }
  return (
    <DndDragDropContext onDragEnd={(result) => onDragEnd(result)} {...props}>
      {children}
    </DndDragDropContext>
  );
}

export default DragDropContext;
