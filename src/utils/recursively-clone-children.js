import { Children, isValidElement, cloneElement } from 'react';

export const recursivelyCloneChildren = (children, props) => {
  return Children.map(children, (child) => {
    let childProps = {};
    if (isValidElement(child)) {
      childProps = props;
    }
    if (child.props) {
      childProps.children = recursivelyCloneChildren(
        child.props.children,
        props,
      );
      return cloneElement(child, childProps);
    }
    return child;
  });
};
