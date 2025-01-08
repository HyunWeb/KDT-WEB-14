import React, { useState } from "react";

interface StudentInfo {
  name: string;
  grade: number;
  part?: string; // optional 한 props
  handleClick: (name: string, grade: number, score: number) => void; // 매개변수를 받고 반환값은 void이다.
}

// 객체 name의 키 값이 string 타입이다.
export default function Student({
  name,
  grade,
  part,
  handleClick,
}: StudentInfo) {
  const [score, setScore] = useState<number>(0);
  return (
    <div>
      <ul onClick={() => handleClick(name, grade, score)}>
        <li>이름 : {name}</li>
        <li>학년 : {grade}</li>
        <li>전공 : {part || "자유 전공"}</li>
        <li>
          점수 :{" "}
          <input
            type="number"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setScore(Number(e.target.value))
            }
          />
        </li>
      </ul>
    </div>
  );
}
