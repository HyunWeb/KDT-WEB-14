import React, { useReducer } from "react";

const initState = { value: 0 };

const reducer = (prevState, action) => {
  console.log(prevState, action);

  switch (action.type) {
    case "INCREMENT":
      return { value: prevState.value + 1 };
    case "DECREMENT":
      return { value: prevState.value - 1 };
    case "RESET":
      return initState;
    default:
      return { value: prevState.value };
  }
};

export default function UseReducerEx() {
  // reducer : State를 업데이트 하는 함수
  // dispatch : 액션 (state가 어떻게 변경되어야 하는지에 대한 힌트)을 발생시키는 함수
  // state : 현재 상태
  // useReducer는 [state, dispatch] 를 리턴함
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <div>
      <h1>UseReducerEx</h1>
      <h2>{state.value}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Plus</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Minus</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}
