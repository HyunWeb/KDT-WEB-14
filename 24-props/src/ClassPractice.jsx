import React, { Component } from "react";
import propTypes from "prop-types";
const style = {
  width: "100px",
  height: "44px",
  margin: "0 auto",
  display: "block",
};

export default class ClassPractice extends Component {
  render() {
    let { text, valid } = this.props;

    return (
      <div>
        <h2 style={{ color: "#121212" }}>{text}</h2>
        <br />
        <button onClick={valid} style={style}>
          콘솔 메세지
        </button>
      </div>
    );
  }
}
ClassPractice.defaultProps = {
  text: "이건 기본 text props입니다.",
};
ClassPractice.propTypes = {
  text: propTypes.string.isRequired,
};
