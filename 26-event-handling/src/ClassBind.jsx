import React, { Component } from "react";

export default class ClassBind extends Component {
  state = {
    name: "codingOn",
  };

  printConsole = () => {
    console.log("this", this);
    console.log("name", this.state.name);
  };

  printConsole2() {
    console.log("this", this);
  }

  // 인자 전달하는 경우
  printConsole3 = (msg) => {
    console.log(msg);
  };

  // 인자 전달 + 이벤트 객체 사용하는 경우
  printConsole4 = (e, msg) => {
    console.log(e);
    console.log(msg);
  };

  render() {
    return (
      <div>
        <h1>Class Component Event</h1>
        <button onClick={this.printConsole}>printConsole(인자x)</button>
        <button onClick={this.printConsole2.bind(this)}>
          printConsole2(인자x)
        </button>

        {/* 익명의 화살표 함수를 전달해서 곧바로 실행이 되지 않도록 방지 */}
        <button onClick={() => this.printConsole3("안녕")}>
          printConsole(인자O)
        </button>

        <button onClick={(e) => this.printConsole4(e, "안녕")}>
          printConsole(인자O)
        </button>
      </div>
    );
  }
}
