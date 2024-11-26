import React, { Component } from "react";

export default class Ex3 extends Component {
  state = {
    inputWriter: "",
    inputTitle: "",
    comment: [
      {
        writer: "민수",
        title: "안녕",
      },
    ],
    inputSearch: "",
    searchType: "writer",
    result: [],
  };

  addComment = () => {
    if (this.state.inputWriter === "" || this.state.inputTitle === "") {
      this.myinputWriter.focus();
      return;
    }
    const newComment = {
      writer: this.state.inputWriter,
      title: this.state.inputTitle,
    };
    // concat 대체
    this.setState({
      comment: [...this.state.comment, newComment],
      inputWriter: "",
      inputTitle: "",
    });
  };

  searchComment = () => {
    const searchResult = this.state.comment.filter((value) => {
      if (value[this.state.searchType].includes(this.state.inputSearch))
        return value;
      else return null;
    });

    this.setState({
      result: searchResult,
      inputSearch: "",
    });
  };

  render() {
    return (
      <div>
        <form>
          <label htmlFor="writer">작성자 : </label>
          <input
            type="text"
            id="writer"
            value={this.state.inputWriter}
            onChange={(e) => this.setState({ inputWriter: e.target.value })}
            ref={(ref) => {
              this.myinputWriter = ref;
            }}
          />

          <label htmlFor="title">제목 : </label>
          <input
            type="text"
            id="title"
            value={this.state.inputTitle}
            onChange={(e) => this.setState({ inputTitle: e.target.value })}
            ref={(ref) => {
              this.myinputTitle = ref;
            }}
          />

          <button type="button" onClick={this.addComment}>
            작성
          </button>
        </form>

        <select
          onChange={(e) => {
            this.setState({ searchType: e.target.value });
          }}
        >
          <option value="writer">작성자</option>
          <option value="title">제목</option>
        </select>
        <input
          type="text"
          placeholder="검색어"
          value={this.state.inputSearch}
          onChange={(e) => this.setState({ inputSearch: e.target.value })}
        />
        <button onClick={this.searchComment}>검색</button>

        <table
          border={1}
          cellSpacing={0}
          style={{ marginTop: "30px", width: "500px" }}
        >
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {this.state.comment.map((value, idx) => {
              return (
                <tr key={idx + 1}>
                  <td>{idx + 1}</td>
                  <td>{value.title}</td>
                  <td>{value.writer}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <h3>검색 결과</h3>
        {this.state.result.length > 0 ? (
          <table
            border={1}
            cellSpacing={0}
            style={{ marginTop: "30px", width: "500px" }}
          >
            <thead>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
              </tr>
            </thead>
            <tbody>
              {this.state.result.map((value, idx) => {
                return (
                  <tr key={idx + 1}>
                    <td>{idx + 1}</td>
                    <td>{value.title}</td>
                    <td>{value.writer}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <div>검색결과가 없습니다.</div>
        )}
      </div>
    );
  }
}
