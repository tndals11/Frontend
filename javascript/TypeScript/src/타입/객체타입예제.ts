// & ============ 유니언 ============= 
// ! Union 타입을 사용한 변수 선언 

type MixedType = string | number | boolean;

let mixedType: MixedType = '문자열';
mixedType = 123;
mixedType = true;

// ! 2. 함수 매개변수에 Union 타입 적용
// number와 string 타입 중 하나를 매개변수로 받아, 해당 값이 number일 경우 숫자를 2배로 증가시키고, string일 경우 그대로 반환하는 함수 doubleOrNothing을 작성

type Union = number | string;

function doubleOrNothing(type : Union) {
    if (typeof type === 'number' ) {
      return type * 2;
    } else {
      return type;
    }
}

console.log(doubleOrNothing('홍길동'));

// ! 3. Union 타입과 타입 가드를 활용한 고급 예제
// Admin과 User 타입 명시
// - Admin은 id(number 타입)와 isAdmin (boolean 타입) 속성을, User는 id (number 타입)와 username (string 타입)속성 포함

// ? - 두 타입의 유니온 타입을 사용하여 Person 타입을 선언하고, id, isAdmin, username 중 적절한 속성을 가진 객체 생성

// ? - Person 타입의 객체를 매개변수로 받아 Admin인지 User인지를 구분하는 함수 identifyPerson을 작성

type Admin = {
  id: number;
  isAdmin : boolean;
}

type User = {
  id: number;
  username: string;
}

type adminOrUser = Admin | User;

let Person:adminOrUser = {
  id:  1,
  username: '홍길동',
}

console.log(Person); // { id: 1, username: '홍길동' }

function identifyPerson(someone: Admin | User) {
}