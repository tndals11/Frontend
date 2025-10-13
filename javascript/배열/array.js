//% JS의 배열 %//
// : 여러 개의 데이터를 순차적으로 나열한 자료 구조
// - 다양한 타입을 하나의 배열에 저장 가능
// - 배열의 크기가 고정적이지 않음 (동적)

// +) 인덱스 번호 : 0부터 시작
// +) 각 데이터 : 요소

// ! 1. 배열 생성 방식
// 1) 리터럴('문자 그대로의', literal) 방식

// 변수종류 변수명 = ['요소1', '요소2', '요소3', ...];

let fruits = ['사과', '오렌지', '망고']; // 대괄호 안에 원하는 요소를 ,(콤마)로 구분하여 나열

let numbers = [1, 2, 3, 4, 5,];

let empty = [];

let varilableValues = [1, '문자', true, undefined, null, [1, 2, 3]];

// 2) Array 생성자 사용 방식
// : 새로운 배열 생성 시 배열 크기, 초기값 지정 가능

// 변수종류 변수명 = new Array(크기값);
// 변수종류 변수명 = new Array(초기값을 나열);
let arrayFruits1 = new Array(3);
let arrayFruits2 = new Array('사과', '오렌지', '망고');

// ! 2. 배열의 활용
// ? 1) 요소 접근 & 수정
const sports = ['축구', '야구', '농구'];

// clg : console.log(); = snippet 기능
console.log(sports[1]); // 배열명[인덱스번호]

sports[2] = 'baskeball'
console.log(sports);

// cf) 참조 자료형 : 배열, 함수, 객체 등
//      >> 실제 데이터 x, 메모리 주소를 저장하여 '참조'

const baskeball = '농구';
// baskeball = 'basketball'; TypeError: Assignment to constant variable.

// ? 요소 길이
console.log(sports.length); // 3

// cf) JS배열은 동적 배열 : 임의로 배열의 크기 수정 가능
//      >> 비워지는 요소에는 undefined 값 (새로운 공간의 타입)
sports.length = 6;

// 이어지는 undefined를 <3 empty items> 방법으로 표기
console.log(sports); // [ '축구', '야구', 'baskeball', <3 empty items> ]

sports[5] = '배구';
console.log(sports); // [ '축구', '야구', 'baskeball', <2 empty items>, '배구' ]

sports[4] = '탁구';
console.log(sports); // [ '축구', '야구', 'baskeball', <1 empty item>, '탁구', '배구' ]

console.log(sports[3]); // undefined : 비워진 배열 값

let snacks = ['칸쵸', '초코송이', '포테토칩', '초코송이'];

// 1) indexOf(요소값) : 찾는 요소의 첫 번째 인덱스를 반환 (없으면 -1)
console.log(snacks.indexOf('초코송이')); // 1
console.log(snacks.indexOf('딸기송이')); // -1

// 2) lastIndexOf(요소값) : 배열의 끝부터 찾는 요소의 첫 번째 인덱스를 반환 (없으면 -1)
console.log(snacks.lastIndexOf('초코송이')); // 3
console.log(snacks.lastIndexOf('딸기송이')); // -1

// 3) includes() : 배열에 해당 요소의 존재 여부를 확인 - boolean 값 반환
let hasPotatochip = snacks.includes('포테토칩');
console.log(hasPotatochip); // true

// ? 배열 조작 함수
fruits = ['Apple', 'Banana'];

// 1) 추가 : push()     - 맨 마지막에 요소 추가 (+ 수정된 배열 길이를 반환)
//          unshift()   - 제일 첫 번째 요소부터 하나 이상의 요소를 추가 (+ 수정된 배열 길이를 반환)

// 2) 삭제 : pop()      - 맨 마지막 요소 제거 (+ 해당 값 반환)
//          shift()     - 제일 첫 번째 요소 제거 (+ 해당 값 반환)

// +) splice() - 추가 / 제거 

let newLenth = fruits.push('Cherry');
console.log(newLenth); // 3

let lastFruit = fruits.pop();
console.log(lastFruit); // Cherry
console.log(fruits); // [ 'Apple', 'Banana' ]

let firstFruit = fruits.shift();
console.log(firstFruit); // Apple
console.log(fruits); // [ 'Banana' ]


newLenth = fruits.unshift('mango', 'orange'); // 시작 부분에 하나 이상의 요소 추가 (, 로 나열)
console.log(newLenth); // 3
console.log(fruits); // [ 'mango', 'orange', 'Banana' ]

// ? 추가 : 추가 후의 배열 길이를 반환
// 삭제 : 삭제한 요소를 반환

// ? splice()
// 1) 추가 : splice(시작 인덱스, 0, 아이템 나열)
//          ! >> 3번째 인자값이 있으면 추가로 인식 !
console.log(fruits); // [ 'mango', 'orange', 'Banana' ]
fruits.splice(1, 0, 'Strawberry', 'Coconut'); // [ 'mango', 'Strawberry', 'Coconut', 'orange', 'Banana' ]
console.log(fruits);

// 2) 삭제 : splice(시작인덱스, 삭제할 요소의 개수)
//          ! >> 2번째 인자 값의 개수 만큼 시작 인덱스에서 삭제
let removedFruits = fruits.splice(1, 2); 
console.log(fruits); // [ 'mango', 'orange', 'Banana' ]

// ? 요소 정렬
// sort() : 오름차순 정렬
// reverse() : 내림차순 정렬
console.log(fruits.sort());
console.log(fruits.reverse());

// ? 배열 반환
let fruitValues = ['사과', '바나나', '망고'];
console.log(fruitValues.join()); // 사과,바나나,망고 // 구분자를 전달하지 않으면 기본값 ','
console.log(fruitValues.join(', '));
console.log(fruitValues.join('-'));
console.log(fruitValues.join(' '));

let str1 = '사과,바나나,망고';
let str2 = '사과-바나나-망고';
let str3 = '사과 바나나 망고';
console.log(str1.split(',')); 
console.log(str2.split('-'));
console.log(str3.split(' ')); // [ '사과', '바나나', '망고' ]

// !다차원 배열
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9, 10]
];

console.log(matrix[2]); // [ 7, 8, 9, 10 ]

console.log(matrix[2][3]); // 10