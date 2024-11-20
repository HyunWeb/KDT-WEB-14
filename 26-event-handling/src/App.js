import "./App.css";
import ClassBind from "./ClassBind";
import ColorText from "./components/ex/ColorText";
import HandlerEx from "./components/ex/HandlerEx";
import HideAndSeek from "./components/ex/HideAndSeek";
import Counter from "./Counter";
import SyntheticEvent from "./SyntheticEvent";
import Practice from "./components/ex/Practice";
import ExAll from "./components/ex/ExAll";

function App() {
  return (
    <div className="App">
      <SyntheticEvent />
      <hr />

      <ClassBind />
      <hr />
      <Counter />
      <hr />
      <HandlerEx />
      <hr />
      <ColorText />
      <hr />
      <HideAndSeek />
      <hr />
      <Practice />
      <hr />
      <ExAll />
    </div>
  );
}

export default App;
