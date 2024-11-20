import React from "react";

export default function FruitOption({ fruitsArr }) {
  return (
    <>
      {fruitsArr.map((fruitsArr, index) => (
        <option key={index} value={fruitsArr.value}>
          {fruitsArr.label}
        </option>
      ))}
    </>
  );
}
