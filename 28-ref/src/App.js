import LifeCycleFunc from "../../29-lifecycle/src/LifeCycleFunc";
import Ex3 from "./Ex3";
import Ex3Function from "./Ex3Function";
import RefClass1 from "./RefClass1";
import RefClass2 from "./RefClass2";
import RefFunction1 from "./RefFunction1";
import RefFunction2 from "./RefFunction2";

function App() {
  return (
    <div className="App">
      <RefClass1 />
      <hr />
      <RefClass2 />
      <hr />
      <Ex3 />
      <hr />
      <RefFunction1 />
      <hr />
      <RefFunction2 />
      <hr />
      <Ex3Function />
      <hr />
    </div>
  );
}

export default App;
