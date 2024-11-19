// import "./App.css";
import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";
import Button from "./Button";
import Food from "./food";
import BestSeller from "./BestSeller";
import ClassPractice from "./ClassPractice";

function App() {
  const myfunction = () => {
    console.log("콘솔 띄우기 성공!");
  };
  return (
    <div className="App">
      <FunctionComponent name="새싹" />
      <FunctionComponent />
      <hr />
      <ClassComponent name="새싹" />
      <ClassComponent />
      <hr />
      <Button link="https://www.google.com">Google</Button>
      <hr />
      <Food />
      <hr />
      <BestSeller
        title="나의 하루는 4시 40분에 시작된다"
        author="김유진"
        price="13,500"
        type="자기계발서"
      />
      <hr />
      <ClassPractice
        text="App 컴포넌트에서 넘겨준 text props입니다."
        valid={myfunction}
      />
    </div>
  );
}

export default App;
