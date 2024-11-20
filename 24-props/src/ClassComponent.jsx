import { Component } from "react";
import propTypes from "prop-types";

export default class ClassComponent extends Component {
  // 클래스형 컴포넌트는 render 함수 필수
  render() {
    const strdent = "길동";
    const { name } = this.props;
    return (
      <div>
        <div>{name}</div>
        <div>{this.props.name}</div>
      </div>
    );
  }

  // static defaultProps = {
  //   name: "철수",
  // };

  static propTypes = {
    name: propTypes.string,
  };
}
ClassComponent.propTypes = {
  name: propTypes.string.isRequired,
};

ClassComponent.defaultProps = {
  name: "철수",
};
