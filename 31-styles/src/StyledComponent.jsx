import React from "react";

import styled from "styled-components";

// CSS IN JS : js 안에 css를 작성하는 것
// styled-components emotion, styled-jsx
// 각각의 컴포넌트마다 격리된 스타일 적용이 가능하다.

const StyledContainer = styled.div`
  display: flex;
`;

const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.$bgColor};
`;

const StyledImg = styled.img`
  width: 100px;
  height: 100px;
`;

// $ 기호 없으면 dom 속성으로 읽어버리기 때문에 $를 표시해서 dom에서는 사용하지않도록 만든다.
export default function StyledComponent() {
  return (
    <StyledContainer>
      <StyledBox $bgColor="red"></StyledBox>
      <StyledBox $bgColor="orange"></StyledBox>
      <StyledImg src="./logo192.png" />
    </StyledContainer>
  );
}
