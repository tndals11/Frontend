import React, { useRef, useState } from "react";

//! === useRef ===
// use + References(참조)
// : 변경 가능한 참조 객체를 생성할 수 있는 기능 (훅)
// : React에서 값을 기억하거나 DOM 요소를 직접 조작할 때 0사용하는 특별한 변수

//? 사용 목적
// - DOM 요소에 직접적으로 접근하고 조작
// - 컴포넌트가 재랜더링될 때도 값이 유지되는 변수 관리
// - 이전 상태를 기억 (랜더링 사이에도 지속되는 값 유지)

//? 기본 구조
// - const refContainer = useRef<valueType>(initialValue);

//% refContainer
// : useRef는 객체를 반환 // useState는 배열 반환
// - 해당 객체는 current 속성을 포함
// - 컴포넌트 재렌더링과 무관하게 값이 유지

//% refContainer.current
// : 저장된 현재 값에 접근

function Ref01() {
  //! === HOOKS ===
  const [text, setText] = useState<string>("");

  //? useRef VS 일반 변수 let
  // 1) useRef: 재렌더링 사이에도 값이 유지
  //    - 값을 바꿔도 컴포넌트를 재렌더링하지 않음
  //    - 값은 항상 최신값으로 유지 (.current 값을 계속 업데이트)
  const lengthRef = useRef<number>(0);

  // 2) 일반 변수
  //    - 함수형 컴포넌트는 변화를 감지하면 랜더링 될 때마다함수 전체가 다시 실행
  //    - 아래의 number 변수에 매번 새로 초기화가 진행
  let lengthVar = 0;

  //! Event Handler
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);

    lengthRef.current = e.target.value.length;
    lengthVar = e.target.value.length;
    console.log(lengthRef.current);
    console.log(lengthVar);
  };

  return (
    <div>
      <h4>현제 텍스트 길이 측정 예제</h4>
      <input type="text" value={text} onChange={handleInputChange} />
      <p>재렌더링 시에도 값이 유지되는 Ref 값 : {lengthRef.current}</p>
      {/* 
        📌 콘솔에는 lengthVar가 계속 찍히지만 화면에는 반영되지 않음
        >> 실제로 화면이 렌더링될 때는 이미 새로운 값(0)으로 다시 초기화 된 상태 !
      */}
      <p>컴포넌트가 랜더링 될 때마다 초기화되는 값 : {lengthVar}</p>
    </div>
  );
}

export default Ref01;
