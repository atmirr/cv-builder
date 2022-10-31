import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import fieldsPathContext from "@contexts/fields-path";
import { selectField, save } from "@slices/fields";
import { Box } from "@material-ui/core";
import TypographyInput from "../TypographyInput";

function TypographyField({
  id: fieldId,
  Wrapper = Box,
  wrapperProps,
  wrapperClassName,
  ...props
}) {
  const fieldsPath = useContext(fieldsPathContext);
  const path = [...fieldsPath, fieldId];
  const dispatch = useDispatch();
  const { value, placeholder, hide } = useSelector(selectField(path));
  const onChange = (value) => {
    dispatch(
      save({
        path,
        value,
      })
    );
  };
  return !hide ? (
    <Wrapper {...wrapperProps} className={wrapperClassName}>
      <TypographyInput placeholder={placeholder} onChange={onChange} {...props}>
        {value}
      </TypographyInput>
    </Wrapper>
  ) : null;
}

export default TypographyField;
