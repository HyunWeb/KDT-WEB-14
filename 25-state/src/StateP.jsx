import React, { Component } from "react";

export default class StateP extends Component {
  state = {
    number: 0,
  };

  rise = () => {
    this.setState((prevState) => {
      return { number: (prevState.number += 2) };
    });
  };
  discount = () => {
    this.setState((prevState) => {
      return { number: (prevState.number -= 1) };
    });
  };

  render() {
    const { number } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <button onClick={this.rise}>+2</button>
        <button onClick={this.discount}>-1</button>
      </div>
    );
  }
}
