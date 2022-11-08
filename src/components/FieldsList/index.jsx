import React, { useContext } from "react";
import clsx from "clsx";
import { map, join } from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import fieldsPathContext from "@contexts/fields-path";
import { selectFieldsList, remove } from "@slices/fields";
import { add } from "@slices/fields";
// import { DROPPABLE_TYPE } from '@components/DragDropContext/constants/droppable';
import Droppable from "@components/Droppable";
import Draggable from "@components/Draggable";

const useStyles = makeStyles(() => ({
  root: {},
  block: {
    // TODO: Should be removed!
    border: "1px solid #333",
  },
}));

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
  const classes = useStyles();
  const dispatch = useDispatch();
  const fieldsList = useSelector(selectFieldsList(path));
  const handleAddField = () => {
    dispatch(add({ path }));
  };
  const generateId = (path) => join(path, "_");
  return (
    <ListComponent
      className={clsx(classes.root, className)}
      {...listComponentProps}
    >
      {fieldsList && (
        <Droppable id={generateId(path)} key={generateId(path)} type={type}>
          {map(fieldsList, ({ id, orderIndex }) => {
            const itemPath = [...path, id];
            return (
              <Draggable
                id={generateId(itemPath)}
                key={generateId(itemPath)}
                index={Number(orderIndex)}
                className={classes.block}
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
