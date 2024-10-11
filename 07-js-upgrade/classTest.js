//클래스
//: 객체를 생성하는 하나의 탬플릿 => 객체를 만들기 위해서 사용한다.

//집이라는 객체를 만들어보자고 할때
/**
 * 속성
 * 만들어진 연도
 * 집의 이름
 * 창문 갯수 ...

 * 메소드
 * 건물 나이 출력 메소드...
 */

//클래스 정의(틀을 만듦)

class House {
  // 생성자 함수
  // : 클래스를 이용해 객체를 생성할 때마다 속성을 초기화
  constructor(year, name, window) {
    this.year = year;
    this.name = name;
    this.window = window;
  }

  // 메소드 : 집의 나이를 출력
  getAge() {
    console.log(`${this.name}은 건축한 지 ${2024 - this.year}년 되었어요!`);
  }
}

// 클래스를 이용해 객체를 생성!
const house1 = new House(1990, "롯데캐슬", 100);
console.log("house> ", house1);
/**
 * name
 * :
 * "롯데캐슬"
 * window
 * :
 * 100
 * year
 * :
 * 1990
 */
//{year: 1990, name: 롯데캐슬, window: 100}

console.log(house1.name);
house1.getAge();

const house2 = new House(2007, "자이", 200);
console.log(house2);

// 클래스 상속
// 부모 클래스 : House
// 자식 클래스 : Apartment

class Apartment extends House {
  constructor(year, name, window, floor) {
    // 부모 객체에서 상속 받아옴 = 상속한 부모 클래스의 생성자를 호출
    super(year, name, window);
    this.floor = floor;
  }

  getAptInfo() {
    return `${this.year}년에 지어진 ${this.name} 아파트의 총 층수는 ${this.floor}`;
  }
}

const apt1 = new Apartment(2022, "래미안", 100, 30);
console.log(apt1.name);
console.log(apt1.getAptInfo());
apt1.getAge();

class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}
let rec1 = new Shape(3, 4);
console.log(rec1.getArea()); // 12

class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }
}
let rec = new Rectangle(4, 5);
