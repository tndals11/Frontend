//? 타입 종류
// * 기본 타입 (원시 타입 - string, number, boolean 등)
// : typeof 연산자 (문자열로 타입 반환)

let name = '홍길동';
let age = 20;
let isStudent = false;
//  권장) 변수종류 변수명: 타입명 = 값;

let anyData = '문자열'; //  타입 생략 가능: 타입 체킹을 생략 X
// anyData = 123; //? 타입을 명시하지 않아도 초기화 데이터 타입 지정

// * 배열 타입
// 1) 기본타입명 뒤에 []로 첨부
let lists1: string[] = ['1', '2', '3'];

// 2) 제네릭 타입: Array<타입명>
let list2: Array<Number> = [1, 2, 3];

// * void 타입
// : 아무런 값이 없음을 나타냄
// - 주로 함수의 반환값이 없거나, return 키워드 뒤에 값이 없는 경우

// ? 함수 타입 지정 방법 
// function 함수명 (파라미터: 타입): 반환 타입 { ... }

// Error : Parameter 'parameter' implicitly has an 'any' type
// >> TS에서는 파라미터 타입 미지정 시 오류 발생 !!!
function voidType(parameter: number):void {
  console.log(parameter); // 30
  return;
}

voidType(30); 


function stringReturn(str1: string, str2: string):string {
    return str1 + str2;
}

console.log(stringReturn('홍', '길동')); // 홍길동

// * null & undefined
// null: 아무겂도 없음, 데이터가 잘못된 경우
// undefined: 변수 생성은 했지만, 안에 값이 없을 경우


//? JS와의 차이점
// : JS는 각각의 타입에 다른 타입의 데이터 지정 가능
// > TS는 각각의 타입으로 지정된 변수는 각 타입만! 할당 가능

let nullType: null = null; // 타입 주석을 사용한 타입 강화 시 !
// nullType = 'hello'; Error : nullTYPE은 null타입만 받을 수 있다.
nullType = null;

let undefinedType: undefined;
// undefinedType = 'hello'; Error 타입이 안맞음
// undefinedType = 123; 

// * any 타입 (모든 타입)
// : 모든 타입에 대해 허용하는 타입
// - 타입 검사 오류 방지를 위해 사용 (모든 타입과 호환 가능)
// - 사전에 오류 타입 계산 불가! (ts를 js처럼 사용)

let anyType: any = 3;
anyType = 'hello';
anyType = 123;
anyType = {};
anyType = [];

let unknownData;
// : 선언 시 직접적인 타입 명시를 하지 않을 경우
// >> 값이 할당되기 전까지 자동으로 any 타입으로 간주

// * never 타입
// : 절대 발생하지 않는 값의 타입
// - 함수가 예외를 발생시키거나, 끝나지 않을 때 사용
function error(message: string):never {
  throw new Error(message);
}

// error('에러 발생');
