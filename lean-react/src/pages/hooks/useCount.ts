// useCount.ts
// : Custom Hooks - 함수/기능
import { useState } from "react";

export function useCount<T extends number>(initalValue: T) {
  const [count, setCount] = useState(initalValue);

  // 이벤트 핸들러
  //* setCount(prev => (prev + 1) as T) 타입 단언
  const increment = () => setCount(prev => (prev + 1) as T);
  const decrement = () => setCount(prev => (prev - 1) as T);
  const reset = () => setCount(initalValue);

  //* useState는 배열 => return에 객체로 반환
  return { count, increment, decrement, reset}; 
}