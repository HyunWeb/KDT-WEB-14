import propTypes from "prop-types";
// export default function FunctionComponent(props) {
//   return <div>{props.name}</div>;
// }

// 곧바로 props 구조분해 할당으로 받기
// 기본값 설정 이게 더 권장되는 방법
// export default function FunctionComponent({ name = "홍길동" }) {
//   return <div>{name}</div>;
// }

export default function FunctionComponent({ name }) {
  const student = "길동";
  return <div>{name}</div>;
}

FunctionComponent.defaultProps = {
  name: "철수",
};

FunctionComponent.propTypes = {
  name: propTypes.string,
};
