import React from "react";

export default function ColorOption({ colorArr }) {
  return (
    <>
      {colorArr.map((item, index) => (
        <option key={index} value={item.value}>
          {item.label}
        </option>
      ))}
    </>
  );
}
