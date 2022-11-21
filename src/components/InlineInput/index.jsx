import React, { useState } from "react";

function InlineInput({
  children,
  classNames,
  placeholder,
  onChange,
  ...props
}) {
  const [currentValue, setCurrentValue] = useState(children);
  const [displayText, setDisplayText] = useState(currentValue || placeholder);
  const [focusMode, setFocusMode] = useState();
  const shouldTextTransparent = placeholder && !currentValue && !focusMode;
  const handleBlur = (e) => {
    const value = e.target.textContent;
    setFocusMode(false);
    if (value !== currentValue) {
      setCurrentValue(value);
      onChange && onChange(value);
    }
    if (!value) {
      setDisplayText(placeholder);
    }
  };
  const handleClick = () => {
    setFocusMode(true);
    if (!currentValue) {
      setDisplayText("");
    }
  };
  return (
    <p
      className={`outline-none ${shouldTextTransparent ? " opacity-30" : ""} ${
        classNames ? classNames : ""
      }`}
      contentEditable
      suppressContentEditableWarning
      onBlur={handleBlur}
      onClick={handleClick}
      {...props}
    >
      {displayText}
    </p>
  );
}

export default InlineInput;
