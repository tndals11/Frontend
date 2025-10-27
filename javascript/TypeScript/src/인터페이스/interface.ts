// ! === 인터페이스(interface) === //
// : 객체(속성, 메서드) 구조를 정의하는 TS 기능
// +) 함수 타입 정의도 가능

// - 컴파일 시점에 타입 체킹을 사용
// : 다양한 구현체에 동일한 인터페이스 사용으로 일관성과 재사용성 향상

//? cf) 타입 별칭(type alias)
// : 데이터 타입 명시
// - 원시 타입, 유니온, 인터섹션 등의 모든 타입을 별칭으로 지정 가능
type UserType = {
  name: string;
  age: number;
}

//? 인터페이스 구현 방법
// : interface 키워드 사용
// - 인터페이스명은 대문자로 시작
// - 객체의 문법 체계 모두 사용 가능 (옵셔널 ?, 읽기전용 readonly)
interface IUser {
  age: number;
  // 인터페이스명: I+타입명
  // 타입별칭: 타입명Type
  greet(name: string): void;
}

let userA: IUser = {
  age: 29,

  greet: (name) => {
    console.log(`${name} hello`);
  }
}

userA.greet('홍길동');

// ? 클래스에서 인터페이스 구현
// : implements 키워드 사용
// - 해당 타입을 가지는 클래스 정의
class Student implements IUser {
  /*
    * 방법 2 : 클래스의 해당 속성이 반드시 초기화 될 것을 "개발자"가 컴파일러에게 안내
    * > 컴파일러에게 나중에 반드시 초기화 된다고 명시
    * > Definition Assignment Assertion (확실한 할당 주장)
  */ 
  name!: string;
  age: number;
  
  // Error : Property 'name' has no initializer and is not definitely assigned in the constructor.
  // : TS 클래스는 객체 속성이 생성자 내에서 초기화 되지 않으면 오류 발생

  //* 방법 1 : 클래스 필드 초기화 관련 오류 해결: 생성자에서 모두 초기화
  constructor(name: string, age:number) {
    this.name = name;
    this.age = age;
  }

  greet(name: string): void {
      console.log(`Hello1, My Name is ${name}`);
      console.log(`Hello2, My Name is ${this.name}`);
  }
}

const student1 = new Student('홍길동', 20); // this.name === 홍길동
student1.greet('이길동'); // name === 이길동

const student2 = new Student('삼길동', 76);
student2.greet('사길동');

// ? 인터페이스 확장
// A extends B 키워드 ()
// : A와 B가 같은 형식 (클래스 | 인터페이스)

// cf) A implement B 키워드
// : A와 B가 다른 형식 (A: 클래스, B: 인터페이스)

interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
  // color: string; - 해당 속성이 생략된 것처럼 작동
}

let sqare1: Square = {
  sideLength: 10,
  color: 'tomato'
} 

console.log(sqare1); //{ sideLength: 10, color: 'tomato' }

// === interface VS type alias ===
// & interface
// - extends 키워드로 확장 가능 (A 인터페이스 extends B 인터페이스)
interface A { a: string; }
interface A { b: string; }
interface A { c: string; } // interface A { a: string; b: string; c: string; }
// - 객체 형태만 ! 정의 가능
// - implements 사용 가능 (클래스 구현)
// >> 선언 목적 : 구조 중심 객체 설계

// & type alias
// - &(인터섹션, 교차 타입)으로 확장 가능 (A 타입별칭 & B 타입별칭)
// - 같은 이름으로 중복 선언 불가
type B = { a: string; }
// type B = { b: string; } Error : Duplicate identifier 'B'
// - 원시 타입, 유니언, 인터섹션, 튜플 등 모든 타입 표현 가능
// - implements 사용은 가능하지만 권장 x
// >> 선언 목적: 타입 조합 (Union/Intersection)등