import React, { useState } from "react";

export default function InputInfo({ setArr, arr }) {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");

  const addInfo = () => {
    const newArr = arr.concat({ id: arr.length + 1, name: name, email: email });
    setArr(newArr);

    setName("");
    setemail("");
  };

  return (
    <form>
      <input
        type="text"
        placeholder="이름"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="이메일"
        id="email"
        value={email}
        onChange={(e) => setemail(e.target.value)}
        onKeyDown={(e) => e.keyCode === 13 && addInfo()}
      />
      <button type="button" onClick={() => addInfo()}>
        등록
      </button>
    </form>
  );
}
