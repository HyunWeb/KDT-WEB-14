import React, { useState } from "react";

export default function HideAndSeek() {
  const [displayState, setDisplayState] = useState(true);

  const setDisplay = () => {
    setDisplayState(!displayState);
  };

  return (
    <div>
      <button onClick={setDisplay}>
        {displayState ? "사라져라" : "보여라"}
      </button>

      {displayState && <h2>안녕하세요</h2>}
    </div>
  );
}
