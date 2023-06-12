import React from "react";

function NextArrowComponent(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        color: "#fff",
        right: "20px",
        zIndex: 10,
      }}
      onClick={onClick}
    />
  );
}

export default NextArrowComponent;
