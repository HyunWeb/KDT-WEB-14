import React, { useState } from "react";
import FruitOption from "./FruitOption";
import ColorOption from "./ColorOption";

export default function Practice() {
  const fruitsArr = [
    {
      value: "apple",
      label: "사과",
      src: "./apple.jpg",
      alt: "사과 이미지",
    },
    {
      value: "banana",
      label: "바나나",
      src: "./banana.jpg",
      alt: "바나나 이미지",
    },
    {
      value: "peach",
      label: "복숭아",
      src: "./peach.jpg",
      alt: "복숭아 이미지",
    },
    {
      value: "orange",
      label: "오렌지",
      src: "./orange.jpg",
      alt: "오렌지 이미지",
    },
  ];
  const colorArr = [
    { value: "black", label: "검정" },
    { value: "white", label: "하양" },
    { value: "red", label: "빨강" },
    { value: "orange", label: "주황" },
    { value: "yellow", label: "노랑" },
    { value: "green", label: "초록" },
    { value: "blue", label: "파랑" },
    { value: "purple", label: "보라" },
    { value: "pink", label: "분홍" },
  ];

  const [msg, setMsg] = useState("text");
  const [backColor, setbackColor] = useState("black");
  const [Color, setColor] = useState("white");
  const [imgSource, setimgSource] = useState({
    src: "./apple.jpg",
    alt: "사과 이미지",
  });

  const ChangeValue = (e) => {
    setMsg(e.target.value);
  };

  const ChangeSelect = (e) => {
    fruitsArr.map((item) => {
      if (e.target.value === item.value) {
        setimgSource({ src: item.src, alt: item.alt });
      }
    });
  };

  const ChangeColor = (e) => {
    setbackColor(e.target.value);
  };
  const ChangeTextColor = (e) => {
    setColor(e.target.value);
  };

  return (
    <div>
      <form>
        <label htmlFor="fruits">과일: </label>
        <select name="fruits" id="fruits" onChange={ChangeSelect}>
          <FruitOption fruitsArr={fruitsArr} />
        </select>

        <label htmlFor="backColor">배경색: </label>
        <select name="backColor" id="backColor" onChange={ChangeColor}>
          <ColorOption colorArr={colorArr} />
        </select>

        <label htmlFor="textColor">글자색: </label>
        <select name="textColor" id="textColor" onChange={ChangeTextColor}>
          <ColorOption colorArr={colorArr} />
        </select>
        <br />
        <label htmlFor="">내용: </label>
        <input
          style={{ marginTop: "10px" }}
          type="text"
          placeholder="내용을 입력하세요"
          onChange={ChangeValue}
        />
      </form>

      <div>
        <img
          src={imgSource.src}
          alt={imgSource.alt}
          style={{ width: "200px", marginTop: "20px" }}
        />
        <p
          style={{
            backgroundColor: backColor,
            color: Color,
            width: "40vw",
            margin: "0 auto",
            marginBottom: "50px",
            lineHeight: "1.5",
            fontWeight: 700,
            fontSize: "2rem",
          }}
        >
          {msg}
        </p>
      </div>
    </div>
  );
}
