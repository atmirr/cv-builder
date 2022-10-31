import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  typography: {
    outline: 0,
  },
  transparent: {
    opacity: 0.3,
  },
}));

function TypographyInput({
  children,
  className,
  placeholder,
  onChange,
  ...props
}) {
  const classes = useStyles();
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
      setDisplayText('');
    }
  };
  return (
    <Typography
      className={clsx(
        classes.typography,
        className,
        shouldTextTransparent && classes.transparent,
      )}
      contentEditable
      suppressContentEditableWarning
      onBlur={handleBlur}
      onClick={handleClick}
      {...props}
    >
      {displayText}
    </Typography>
  );
}

export default TypographyInput;
