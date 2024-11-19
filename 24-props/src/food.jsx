import React from "react";
const style = {
  color: "red",
  fontSize: "20px",
  fontWeight: 600,
  textAlign: "center",
  display: "block",
};

export default function food({ food = "햄버거" }) {
  return (
    <div>
      <span style={style}>{food}</span>
    </div>
  );
}
