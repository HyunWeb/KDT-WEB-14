// export const PLUS = "cash/PLUS";
// export const MINUS = "cash/MINUS";

// 액션 생성 함수사용할때는 export 필요 없음
const PLUS = "cash/PLUS";
const MINUS = "cash/MINUS";

const initialState = 0;

//payload 라는 이름으로 데이터를 받아주겠다.
// 액션 생성 함수
export const plus = (payload) => ({ type: PLUS, payload });
export const minus = (payload) => ({ type: MINUS, payload });

// 위에서 생성한걸 아래에서 받는다.
const counterCash = (state = initialState, action) => {
  switch (action.type) {
    case PLUS:
      return state + action.payload;
    case MINUS:
      return state - action.payload;
    default:
      return state;
  }
};

export default counterCash;
