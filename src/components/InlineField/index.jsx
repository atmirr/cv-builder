import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import fieldsPathContext from "@contexts/fields-path";
import { selectField, save } from "@slices/fields";
import InlineInput from "../InlineInput";

function InlineField({
  id: fieldId,
  Wrapper = "div",
  wrapperProps,
  className,
  ...props
}) {
  const fieldsPath = useContext(fieldsPathContext);
  const path = [...fieldsPath, fieldId];
  const { value, placeholder, hide } = useSelector(selectField(path));
  const dispatch = useDispatch();
  const onChange = (value) => {
    dispatch(
      save({
        path,
        value,
      })
    );
  };
  return !hide ? (
    <Wrapper {...wrapperProps} className={className}>
      <InlineInput placeholder={placeholder} onChange={onChange} {...props}>
        {value}
      </InlineInput>
    </Wrapper>
  ) : null;
}

export default InlineField;
