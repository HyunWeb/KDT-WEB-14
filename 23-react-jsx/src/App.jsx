import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = "네로";
  const student = "KDT14";
  const animal = "고양이";
  const a = 10;
  const b = 8;
  const title = "Hello React!";
  const styles = {
    backgroundColor: `yellow`,
    fontSize: "24px",
  };

  return (
    // fragment 빈태그를 통해서 감싸 활용할 수도 있다.
    <>
      <div className="App">
        {/* <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header> */}

        {/* jsx 문법 */}
        {/* 1. 하나로 감싸인 요소  */}
        {/* 2. JavaScript 표현식 사용  
            -{}로 감싸면 js 표현식 사용 가능
            -{}에서 삼항 연산자, 단축 평가 등 사용 가능 (if,for 문 등은 안된다.)
        */}
        {/* 3. style 속성
            - 리액트에서 돔 요소에 스타일 적용 시 문자열X => 객체 사용
            - 스타일 이름 중 하이픈(-) 포함 시 camelCase로 작성
        */}
        <div>{name} 안녕?</div>
        <div>{student === "KDT14" ? "kdt14기 수강생이군요!" : "누구세요?"}</div>
        <div style={{ backgroundColor: "blue", fontSize: "24px" }}>하이</div>
        <div style={styles}>바이</div>
        <h2>
          제 반려동물의 이름은 {name}입니다. <br />
          {name}는 {animal}입니다.
        </h2>
        <p>{3 + 5 == 8 ? "정답입니다." : "오답입니다."}</p>
        <p>{a > b && "a가 b보다 큽니다."}</p>
        <div className="title">{title}</div>
        <form action="">
          <label htmlFor="id">아이디: </label>
          <input type="text" id="id" /> <br />
          <label htmlFor="pw">비밀번호: </label>
          <input type="password" id="pw" />
        </form>
        {/* 4. className 사용 
            - class -> className
            
            5. 종료 태그가 없는 태그의 사용
            - 기존의 종료 태그가 없는 태그를 사용하더라도 종료 태그를 작성해야 한다. 
            or self-closing 해줘야한다. 
            - 잘못된 예) <input>, <br>
            - 올바른 예) <input/>, <br/>

            6. 주석
            - // : jsx 외부에서 사용하는 주석
        */}
      </div>
      <div></div>
    </>
  );
}

export default App;
