import React from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export default function ShowName() {
  const navigate = useNavigate();

  // 쿼리 문자열로 데이터 전달
  // to="/student/new?name=kdt3rd"
  const [searchParams, setSearchParams] = useSearchParams();
  // 쿼리 문자열 값 사용
  searchParams.get("name");

  // 동적 경로 데이터 전달
  // path="/student/:route"
  const { route } = useParams();

  return (
    <div>
      <h3>
        학생 이름은{" "}
        <span style={{ fontWeight: "900", color: "green" }}>{route}</span>{" "}
        입니다.
      </h3>
      {searchParams.get("name") && (
        <h3 style={{ fontWeight: "900", color: "red" }}>
          실제 이름은 {searchParams.get("name")}
        </h3>
      )}

      <button onClick={() => navigate(-1)}>이전 페이지</button>
    </div>
  );
}
