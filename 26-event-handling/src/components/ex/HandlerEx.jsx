import React, { Component } from "react";

export default class HandlerEx extends Component {
  state = {
    msg: "Hello World!",
  };

  setMsg = (msg) => {
    this.setState({ msg });
  };

  render() {
    return (
      <div>
        <h2>{this.state.msg}</h2>
        <button onClick={() => this.setMsg("GoodBye World!")}>클릭</button>
      </div>
    );
  }
}
