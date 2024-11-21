import React, { useState } from "react";

export default function InputForm({ arr, setArr }) {
  const [name, setName] = useState("");
  const [title, settitle] = useState("");
  const join = () => {
    const newApp = arr.concat({ id: arr.length + 1, name: name, title: title });
    setArr(newApp);
    setName("");
    settitle("");
  };
  return (
    <form action="">
      작성자:{" "}
      <input
        type="text"
        placeholder="작성자"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />{" "}
      제목:{" "}
      <input
        type="text"
        placeholder="제목"
        value={title}
        onChange={(e) => settitle(e.target.value)}
      />{" "}
      <button type="button" onClick={() => join()}>
        작성
      </button>
    </form>
  );
}
