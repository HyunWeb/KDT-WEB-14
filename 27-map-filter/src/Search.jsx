import React, { useState } from "react";

export default function Search({ arr, searcharr, setSearcharr }) {
  const [value, setValue] = useState("");

  const Search = () => {};

  return (
    <form>
      <select name="searchTag" id="searchTag">
        <option value="name">작성자</option>
        <option value="title">제목</option>
      </select>

      <input
        type="text"
        placeholder="검색어"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="button" onClick={() => Search()}>
        검색
      </button>
      <button type="button">전체</button>
    </form>
  );
}
