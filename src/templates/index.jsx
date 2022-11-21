import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { map } from "lodash";
import { selectCurrentLayout } from "@slices/layouts";
import DragDropContext from "@components/DragDropContext";
import Droppable from "@components/Droppable";
import SectionDraggable from "@components/SectionDraggable";
import { DROPPABLE_TYPE } from "@components/DragDropContext/constants/droppable";

// TODO: Should move to a constants file related to each template
const TEMPLATE_COLUMN_CLASSNAMES = {
  3: "col-span-3 grid grid-cols gap-8",
  4: "col-span-4 flex flex-col gap-10",
};

function Templates() {
  const layout = useSelector(selectCurrentLayout);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DragDropContext>
        <div className="grid grid-cols-7 gap-12 py-7 px-8">
          {map(layout, ({ items: blocks, column }, droppableId) => (
            <Droppable
              id={droppableId}
              key={droppableId}
              className={TEMPLATE_COLUMN_CLASSNAMES[column]}
              type={DROPPABLE_TYPE.SECTIONS}
            >
              {map(blocks, (blockName, index) => (
                <SectionDraggable
                  id={blockName}
                  index={index}
                  key={blockName}
                />
              ))}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </Suspense>
  );
}

export default Templates;
