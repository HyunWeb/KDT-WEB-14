// generic
// 선언을 할때 타입을 지정하기 어려운 케이스가 존재
// = 데이터 타입을 외부에서 지정 = 생성 시점에 타입을 명시 = 타입을 변수처럼 사용
// => 재사용성 증가
// <T> 형태로 주로 사용 (T, U, V, ...)

function numArrLen(arr: number[]): number {
  return arr.length;
}

function strArrLen(arr: string[]): number {
  return arr.length;
}
numArrLen([1, 2, 3]);
// numArrLen(["ad"]);

//<T>를 이용해서 매개변수를 선언하는 공간을 하나 더 만듦
function arrLen<T>(arr: T[]) {
  return arr.length;
}
arrLen([1, 2, 3]);
arrLen(["1", "2", "3"]);
arrLen([1, "2", 3]);

// 퀴즈
// 두 개의 매개변수를 넘겨 받아서 콘솔로 출력 하는 함수 generic 이용해 만들고 호출
function printSome<T>(a: T, b: T) {
  console.log(a, b);
}
function printSome2<T, U>(a: T, b: U) {
  console.log(a, b);
}

printSome2<string[], number>(["a"], 4);

printSome<string>("a", "b");
printSome<string[]>(["a"], ["b"]);

////////////////////////////////////////
// interface 와 generic
interface Phone<T> {
  company: string;
  createdAt: Date;
  option: T;
}

type iphoneOption = {
  color: string;
  storage: number;
};

type galaxyOption = {
  color: string;
  isBuz: boolean;
};

const iphone16: Phone<iphoneOption> = {
  company: "apple",
  createdAt: new Date("2024-11-01"),
  option: {
    color: "black",
    storage: 256,
  },
};

function arrElement<T>(arr: T[], idx: number): T | boolean {
  if (arr.length - 1 < idx) return false;
  return arr[idx];
}

console.log(arrElement<number>([5], 1));

function identity<T>(value: T): T {
  return value;
}

const numberValue = identity(5); // number
const stringValue = identity("hello"); // string

function echo<T = string>(value: T): T {
  return value;
}

const stringEcho = echo("Hello");
const numberEcho = echo(123); // 기본값 설정 없이 호출할 경우, 자동으로 string으로 처리
