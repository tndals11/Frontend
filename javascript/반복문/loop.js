// ? 반복문

/*
  * for문 조건식
  for(초기화식; 종료조건; 증감식) {
    표현의 결과가 참인 동안 실행
  }
*/

console.log('=== for 반복문 ===')
for (let i = 0; i < 5; i++) {
  // 초기화  0 + N 미만 조건 : N번 반복
  // 초기화  1 + N 이하 조건 : N번 반복
  console.log(i);
}


// * 별찍기
// 행에 대한 반복: 5번 반복
for (let i = 0; i < 6; i++) {
  let stars = '';

// 별의 개수에 대한 반복: 1 ~ 5까지 증가
  for(let j = 0; j < i; j++) {
    stars += '*';
  }
  console.log(stars);
}

//  ! while문
// : 주어진 조건이 참인 동안 코드 블록을 계속 실행

/*
  * while문 조건식
  while (조건식) {
    반복할 코드
  }
*/ 

console.log('=== while 반복문 ===')

let b = 0;

while (b < 5) {
  console.log(b);
  b++;
}

// ! do-while문
// while문과 유사, 조건 확인 전 반드시 한 번은 코드 블록을 실행

/*
  * do-while문 조건식
  do {
    반복할 실행 블록
  } while (조건식);
*/ 

console.log('=== do-while 반복문 ===')
let c = 0;

do {
  console.log(c);
  c += 1;
} while(c == 5)
