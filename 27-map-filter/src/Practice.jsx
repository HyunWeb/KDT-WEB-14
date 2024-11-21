import React, { useState } from "react";
import InputInfo from "./InputInfo";
import ShowInfo from "./ShowInfo";

export default function Practice() {
  const [arr, setArr] = useState([
    { id: 1, name: "코디", email: "codi@gamil.com" },
    { id: 2, name: "황종현", email: "jonghyun1803@naver.com" },
  ]);
  return (
    <div>
      <InputInfo setArr={setArr} arr={arr} />
      <ShowInfo arr={arr} setArr={setArr} />
    </div>
  );
}
