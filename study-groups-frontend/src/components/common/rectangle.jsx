import React from "react";

const Rectangle = ({ attributes }) => {
  const { id, colour } = attributes;
  return (
    <rect
      className="rect"
      id={id}
      x="0"
      y="0"
      width="40"
      height="40"
      rx="2"
      ry="2"
      fill={colour}
    />
  );
};

export default Rectangle;
