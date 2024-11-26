import React, { useMemo, useState } from "react";

export default function Ex1() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  const FindText = useMemo(() => {
    const reg = new RegExp(`${text2}`, `g`);
    const num = (text1.match(reg) || []).length;
    return num;
  }, [text1, text2]);

  return (
    <div>
      <form action="">
        <input
          type="text"
          value={text1}
          onChange={(e) => setText1(e.target.value)}
          placeholder="텍스트를 입력하세요"
        />{" "}
        <br />
        <input
          type="text"
          value={text2}
          onChange={(e) => setText2(e.target.value)}
          placeholder="찾을 단어를 입력하세요"
        />
      </form>
      <p>
        {text2
          ? `"${text2}"단어의 빈도 수 : ${FindText}`
          : "단어를 입력해주세요"}
      </p>
    </div>
  );
}
