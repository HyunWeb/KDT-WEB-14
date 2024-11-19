import React from "react";
import "./BestSeller.css";

export default function BestSeller({ title, author, price, type }) {
  return (
    <div>
      <h1>이번주 베스트셀러</h1>
      <img src="book.jpg" alt="책 이름_나의 하루는 4시 30분에 시작된다." />
      <h2>{title}</h2>
      <p>
        저자: {author} <br />
        판매가: {price} <br />
        구분: {type}
      </p>
    </div>
  );
}
