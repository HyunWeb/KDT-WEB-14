// only typescript type

// Tuple
let drink: [string, string] = ["사이다", "롯데"];

drink[0] = "cider";
drink[1] = "lotte";

// drink.push("wow"); // 동작이 됨 -> tuple의 한계가 있다.
console.log(drink);

// readonly : 요소 타입 순서와 길이 고정
let drink2: readonly [string, number] = ["사이다", 2000];
// drink2.push // error

let olimpic_newgame: readonly [object, boolean] = [
  {
    name: "쇼트트랙",
    type: "혼성 계주",
  },
  true,
];
// olimpic_newgame[1] = false;

// console.log(olimpic_newgame); // error

/////////////////////////////////////////////

// Enum
enum Auth {
  admin = 0,
  user = 1,
  guest = 2,
}

enum Cafe {
  americano = "아메리카노",
  latte = "카페라떼",
}

console.log(Auth.admin); // 0
console.log(Cafe.latte); // 카페라떼

enum Cake {
  choco,
  vanilla,
  lemon = "레몬", // 중간에 문자를 넣으면 숫자 열거가 끊긴다.
}

console.log(Cake.choco, Cake.vanilla, Cake.lemon); // 0 1 레몬

/////////////////////////////////////////////

// any
// 명시적으로
let val: any;
val = true;
val = 10;
val = "string";

// 암묵적으로
let val2;
val2 = false;
val2 = 10;

/////////////////////////////////////////////

// 사용자 정의 타입 : type & interface

// 1. interface
interface Student {
  name: string;
  isPassed: boolean;
}

const student1: Student = {
  name: "홍길동",
  isPassed: true,
  // addr: "seoul", // 지정된 키 값만 들어갈수 있다.
};

const student2: object = {
  name: "홍길동",
  isPassed: true,
  addr: "seoul",
};

// interface 상속

enum Score {
  Aplus = "A+",
  A = "A",
  B = "B",
  C = "C",
  D = "D",
  E = "E",
}
interface BaseballClub extends Student {
  position: string;
  height: number;
  readonly backNumber?: number; // ? : 있어도 되고 없어도 됨
  [grade: number]: Score;
}

const baseballStudent: BaseballClub = {
  name: "otani",
  isPassed: true,
  position: "pitcher",
  height: 190,
  backNumber: 17,
  1: Score.B,
  2: Score.A,
};

// baseballStudent.backNumber = 3;
console.log(baseballStudent);

// 실습 (interface 이용)
interface Game {
  title: string;
  price: number;
  desc?: string;
  category: string;
  platform: string;
}

let heroGame_A: Game = {
  title: "DC 언체인드",
  price: 50000,
  desc: "DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!",
  category: "액션",
  platform: "모바일",
};

let heroGame_B: Game = {
  title: "MARVEL 퓨처파이트",
  price: 65000,
  category: "롤플레잉",
  platform: "모바일",
};

/////// 2.Type
enum Bp2 {
  SM = 500,
  MD = 700,
  LG = 1000,
}
const width3: Bp2 = Bp2.SM;

type Bp1 = 500 | 700 | 1000;
const width: Bp1 = 1000;
// const width2: Bp1 = 900;

// 교차 타입 : 두개 이상의 타입을 합치는 것
interface Toy {
  name: string;
  start(): void;
}

interface Car {
  name: string;
  color: string;
  price: number;
}

type ToyCar = Toy & Car;

const toyCar: ToyCar = {
  name: "tayo",
  start() {
    console.log("출발~");
  },
  color: "blue",
  price: 5000,
};

type Gender = "F" | "M";
type Person = {
  name: string;
  age?: number;
  like?: string[];
  gender: Gender;
};
