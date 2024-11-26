import React, { useRef, useState } from "react";

export default function RefFunction2() {
  const idRef = useRef(1);
  const [id, setId] = useState(10);
  let test = 10;

  const plusIdRef = () => {
    idRef.current += 1;
    console.log(idRef.current);
    test += 1;
    console.log(idRef.current);
  };

  const plusIdState = () => {
    setId(id + 1);
  };
  return (
    <div>
      <h1>Ref Sample</h1>
      <h2>{test}</h2>
      <h2>{idRef.current}</h2>
      <button onClick={plusIdRef}>PLUS Ref</button>
      <h2>{id}</h2>
      <button onClick={plusIdState}>PLUS State</button>
    </div>
  );
}
