import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ProductDetailPage({ products }) {
  // products : {id, name, email, body}[]
  // console.log("useParams", useParams());
  const { id } = useParams();
  const navigate = useNavigate();

  const targetProduct = products[Number(id) - 1];
  // const { name, email, body } = targetProduct;
  console.log(targetProduct);

  return (
    <div>
      <h1>ProductDetailPage</h1>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
      <button onClick={() => navigate("/")}>홈으로 이동하기</button>

      {products.length !== 0 ? (
        <ul>
          <li>상품 번호 : {id}</li>
          <li>상품명 : {targetProduct.title}</li>
          <li>판매자 : {targetProduct.body}</li>
          <li>상세 설명 : {targetProduct.body}</li>
        </ul>
      ) : (
        <div>
          <p>상품 정보를 불러오는 중입니다...</p>
        </div>
      )}
    </div>
  );
}
