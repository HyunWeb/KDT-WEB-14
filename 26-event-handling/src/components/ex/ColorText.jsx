import React, { useState } from "react";

export default function ColorText() {
  const [color, setColor] = useState("black");
  const [colorName, setColorName] = useState("검정색");

  const changeColor = (Newcolor, obj) => {
    setColor(Newcolor);
    setColorName(obj.innerText);
  };

  return (
    <div>
      <h2 style={{ color: color }}>{colorName} 글씨</h2>
      <button onClick={(e) => changeColor("red", e.target)}>빨간색</button>
      <button onClick={(e) => changeColor("blue", e.target)}>파란색</button>
    </div>
  );
}
