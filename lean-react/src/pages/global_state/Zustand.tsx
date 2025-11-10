import { useAuthStore } from "@/stores/auth.store";
import React from "react";
import { create } from "zustand";

//! Zustand (독일어: '상태')
// : 상태 관리 라이브러리
// - React Hooks 기반 + 최소한의 API를 사용하여 상태를 관리

//? 장점
// 1) 부분 구독: useStore(s => s.x); 형태로 필요한 값만 구독 가능
//       > 불필요한 렌더링 감소

//? 파일명 & 명명 규칙 (베스트 프렉티스)
//% 파일명
// : <domain>.store.ts
// EX) auth.store.ts, cart.store.ts, ui.store.ts 등
//% 훅명
// : use도메인Store
// Ex) useAuthStore, useCartStore, useUiStore 등
//% 상태 타입 네이밍
// : AuthState, CartState, UserState, UiState 등

//? 설치
// npm install zustand

//! === Zustand 예제 (폴더/파일 단위 분리X 예제) == //

//? 저장소 타입 선언
interface CountState {
  // 객체의 속성
  count: number;

  // 객체의 메서드
  increment: () => void;
  decrement: () => void;
}

//? store 생성
// : 전역 상태가 담긴 저장소
// - create 함수를 사용하여 생성 (zustand 라이브러리에 포함)
// > 애플리케이션에서 관리할 상태와 상태 업데이트 함수들이 포함

//# count 값에 대한 전역 상태 관리
// : create 함수의 제네릭 타입
//    > 전역 관리할 대상(상태와 액션)을 정의

// +) create 함수는 set 함수를 인자로 전달
//      : zustand 스토어의 상태를 업데이트 하는 데 사용
export const useCountStore = create<CountState>((set) => ({
  // 객체 반환 - CountState타입
  // 상태 변경 전 초기화
  count: 0,

  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

function Zustand() {
  const { count, increment, decrement } = useCountStore();
  const { user, logout } = useAuthStore();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>증가</button>
      <button onClick={decrement}>감소</button>
      {user && (
        <p>
          {user.loginId}님 환영합니다.
          <button onClick={logout}>로그아웃</button>
        </p>
      )}
    </div>
  );
}

export default Zustand;
