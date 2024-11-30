import { useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import "./App.css";
import { minus, MINUS, plus, PLUS } from "./store/counterCash";

function App3() {
  const cash = useSelector((state) => state.cash);
  const [inputCash, setInputCash] = useState(0);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>코딩온 은행</h1>
      <h2>잔액: {cash}원</h2>
      <form>
        <input
          type="number"
          value={inputCash}
          onChange={(e) => setInputCash(e.target.value)}
          placeholder="금액을 입력해주세요"
        />
        <button
          type="button"
          onClick={() => {
            dispatch(plus(Number(inputCash)));
            setInputCash("");
          }}
        >
          입금
        </button>
        <button
          type="button"
          onClick={() => {
            dispatch(minus(Number(inputCash)));
            setInputCash("");
          }}
        >
          출금
        </button>
      </form>
    </div>
  );
}
export default App3;
