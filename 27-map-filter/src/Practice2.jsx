import React, { useState } from "react";
import InputForm from "./InputForm";
import Search from "./Search";
import Show from "./Show";
import SearchShow from "./SearchShow";

export default function Practice2() {
  const [arr, setArr] = useState([]);
  const [searcharr, setSearcharr] = useState([]);
  return (
    <div>
      <InputForm arr={arr} setArr={setArr} />
      <Search arr={arr} searcharr={searcharr} setSearcharr={setSearcharr} />
      <Show arr={arr} />
      <SearchShow searcharr={searcharr} />
    </div>
  );
}
