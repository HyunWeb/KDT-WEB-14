import React from "react";
import { useSearchParams } from "react-router-dom";

export default function MainPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get("mode")); // null or dark
  return (
    // 클래스 변환도 되도록 만든다.
    <main className={["Main", searchParams.get("mode")].join(" ")}>
      <h1>Home</h1>
      <button onClick={() => setSearchParams({ mode: "dark" })}>
        Dark Mode
      </button>
    </main>
  );
}
