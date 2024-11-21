import React from "react";

export default function Show({ arr }) {
  return (
    <table border={1}>
      <thead>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>작성자</th>
        </tr>
      </thead>
      <tbody>
        {arr.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.title}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
