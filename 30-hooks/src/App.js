import "./App.css";
import Faq from "./components/Faq";
import Form from "./components/Form";
import FormEX from "./components/FormEX";
import UseCallback2 from "./components/UseCallback2";
import UseCallbackEx1 from "./components/UseCallbackEx1";
import UseCallbackPrac from "./components/UseCallbackPrac";
import UseMemoEx from "./components/UseMemoEx";
import UseReducerEx from "./components/UseReducerEx";
import Ex1 from "./Ex1";
import Ex2 from "./Ex2";

function App() {
  return (
    <div className="App">
      <UseMemoEx />
      <hr />

      <UseCallbackEx1 />
      <hr />

      <UseCallback2 postId={9} />
      <hr />
      <Ex1 />
      <hr />
      <Ex2 />
      <hr />
      <UseCallbackPrac />
      <hr />
      <UseReducerEx />
      <hr />
      <Faq />
      <hr />

      <Form />
      <hr />
      <FormEX />
    </div>
  );
}

export default App;
