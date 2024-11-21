import React, { useState } from "react";

export default function Ex3() {
  const [inputWriter, setInputWriter] = useState("");
  const [inputTitle, setinputTitle] = useState("");
  const [comment, setComment] = useState([
    {
      writer: "민수",
      title: "안녕",
    },
  ]);
  const [inputSearch, setinputSearch] = useState("");
  const [searchType, setSearchType] = useState("writer");
  const [result, setResult] = useState([]);

  const addComment = () => {
    const newComment = {
      writer: inputWriter,
      title: inputTitle,
    };
    // concat 대체
    setComment([...comment, newComment]);
    setInputWriter("");
    setinputTitle("");
  };

  const searchComment = () => {
    const searchResult = comment.filter((value) => {
      if (value[searchType].includes(inputSearch)) return value;
      else return null;
    });

    setResult(searchResult);
    setinputSearch("");
  };
  return (
    <div>
      <form>
        <label htmlFor="writer">작성자 : </label>
        <input
          type="text"
          id="writer"
          value={inputWriter}
          onChange={(e) => setInputWriter(e.target.value)}
        />

        <label htmlFor="title">제목 : </label>
        <input
          type="text"
          id="title"
          value={inputTitle}
          onChange={(e) => setinputTitle(e.target.value)}
        />

        <button type="button" onClick={addComment}>
          작성
        </button>
      </form>

      <select
        onChange={(e) => {
          setSearchType(e.target.value);
        }}
      >
        <option value="writer">작성자</option>
        <option value="title">제목</option>
      </select>
      <input
        type="text"
        placeholder="검색어"
        value={inputSearch}
        onChange={(e) => setinputSearch(e.target.value)}
      />
      <button onClick={searchComment}>검색</button>

      <table
        border={1}
        cellSpacing={0}
        style={{ marginTop: "30px", width: "500px" }}
      >
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {comment.map((value, idx) => {
            return (
              <tr key={idx + 1}>
                <td>{idx + 1}</td>
                <td>{value.title}</td>
                <td>{value.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h3>검색 결과</h3>
      {result.length > 0 ? (
        <table
          border={1}
          cellSpacing={0}
          style={{ marginTop: "30px", width: "500px" }}
        >
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {result.map((value, idx) => {
              return (
                <tr key={idx + 1}>
                  <td>{idx + 1}</td>
                  <td>{value.title}</td>
                  <td>{value.writer}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div>검색결과가 없습니다.</div>
      )}
    </div>
  );
}
