import Counter from "./Counter";
import SayFunction from "./SayFunction";
import StateP from "./StateP";

function App() {
  return (
    <div className="App">
      {/* 클래스형 state */}
      <Counter />
      <hr />
      <SayFunction />

      <StateP />
    </div>
  );
}

export default App;
