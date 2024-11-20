import React from "react";

export default function Result({ data }) {
  const { fruit, background, color, content } = data;
  return (
    <div>
      <img src={`${fruit}.png`} alt={fruit} width={100} height={100} />

      <div
        style={{
          padding: "10px",
          marginTop: "10px",
          backgroundColor: background,
          color: color,
        }}
      >
        {content}
      </div>
    </div>
  );
}
