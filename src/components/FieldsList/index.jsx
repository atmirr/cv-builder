import React, { useContext } from "react";
import { map, join } from "lodash";
import { useSelector, useDispatch } from "react-redux";
import fieldsPathContext from "@contexts/fields-path";
import { selectFieldsList, remove } from "@slices/fields";
import { add } from "@slices/fields";
import Droppable from "@components/Droppable";
import Draggable from "@components/Draggable";

function FieldsList({
  children,
  id: fieldsListId,
  className,
  ListComponent = "ul",
  ItemComponent = "li",
  listComponentProps,
  itemComponentProps,
  button = true,
  type,
}) {
  const fieldsPath = useContext(fieldsPathContext);
  const path = [...fieldsPath, fieldsListId];
  const dispatch = useDispatch();
  const fieldsList = useSelector(selectFieldsList(path));
  const handleAddField = () => {
    dispatch(add({ path }));
  };
  const generateId = (path) => join(path, "_");
  return (
    <ListComponent className={className} {...listComponentProps}>
      {fieldsList && (
        <Droppable id={generateId(path)} key={generateId(path)} type={type}>
          {map(fieldsList, ({ id, orderIndex }) => {
            const itemPath = [...path, id];
            return (
              <Draggable
                id={generateId(itemPath)}
                key={generateId(itemPath)}
                index={Number(orderIndex)}
              >
                <fieldsPathContext.Provider value={itemPath}>
                  <ItemComponent {...itemComponentProps}>
                    {children}
                    {button && (
                      <button
                        onClick={() => dispatch(remove({ path: itemPath }))}
                      >
                        Remove
                      </button>
                    )}
                  </ItemComponent>
                </fieldsPathContext.Provider>
              </Draggable>
            );
          })}
        </Droppable>
      )}
      <button onClick={() => handleAddField()}>add</button>
    </ListComponent>
  );
}

export default FieldsList;
