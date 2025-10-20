// # 4. Math 내장 객체 : 수학과 관련된 기본 연산 객체

console.log(`원주율 값: ${Math.PI}`);

console.log(`0이상 1미만의 난수 생성: ${Math.random()}`); // 0이상 1미만의 난수 생성: 0.7901529280669886
console.log(`0이상 10미만의 난수 생성: ${Math.random() * 10}`); // 0이상 10미만의 난수 생성: 0.8215942706915746

console.log(`소수점 자리 내림: ${Math.floor(Math.random() * 10 )}`); // 소수점 자리 내림: 1

console.log(`제곱근(square root): ${Math.sqrt(16)}`); // 제곱근(square root): 4
console.log(`제곱근(square root): ${Math.sqrt(225)}`); // 제곱근(square root): 15

// 5. Date 객체 : 날짜, 시간 데이터 객체
let now = new Date();
console.log(now); // 2025-10-20T03:13:19.141Z (한국 UTC 9시간 빠름 : UTC+9)

// getDate() : 현재 '일'
// getDay() : 현재 '요일' (일요일 0 ~ 토요일 6)
// getFullYear(): 현재 '년도' (YYYY: 2025)
// getMonth(): 현재 '월' (1월 0 ~ 12월 11: 현재 월은 반환값 + 1)
console.log(now.getDate()); // 20
console.log(now.getDay()); // 1
console.log(now.getFullYear()); // 2025
console.log(now.getMonth() + 1); // 10

//  !시간
// getHours(): 0 ~ 23
// getMinutes(): 0 ~ 59
// getSeconds(): 0 ~ 59
console.log(now.getHours()); // 12
console.log(now.getMinutes()); // 19
console.log(now.getSeconds()); // 45

// ! 현지 날짜 표기법 & 시간 표기법 : Locale(현재의)
console.log(now.toLocaleDateString()); // YYYY-MM-DD
console.log(now.toLocaleTimeString()); // 오전/오후 HH:mm:SS

// cf) 월-일-년도 (MM-DD-YYYY): 미국, 캐나다 등

// ! == 요일 데이터 문자열 반환 == //
const current = new Date();
console.log(current); // 2025-10-20T03:24:02.113Z

// 요일 배열 정의
const days = ['SUN', 'MON', 'WED', 'THU', 'FRI', 'SAT'];
const krDays = ['일', '월', '화', '수', '목', '금', '토'];

// getDay()로 인덱스를 받아, 배열에서 요일 문자열 추출
const dayString = days[now.getDay()];

const krDayString = krDays[now.getDay()];

console.log(dayString);
console.log(krDayString);
