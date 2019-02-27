import React from 'react';

const render = (condition = false, children = null) => {
  return !condition ? children : null;
};

export const If = props => {
  return (
    //React map takes the array as a parameter and allows you to name the thing in array
    React.Children.map(props.children, child =>
      React.cloneElement(child, { condition: props.userInfo })
    )
  );
};

export const Then = props => render(props.userInfo, props.children);