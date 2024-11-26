import CssModuleComponent from "./CssModuleComponent";
import Lava from "./Lava";
import MovingCircle from "./MovingCircle";
import SassComponent from "./SassComponent";
import StyledComponent from "./StyledComponent";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <h1>React Styling</h1>
      <hr />
      <CssModuleComponent />
      <hr />
      <h2>SASS</h2>
      <SassComponent />
      <hr />
      <Lava />
      <hr />
      <MovingCircle />
      <h2>styled-components</h2>
      <StyledComponent />
    </div>
  );
}

export default App;
