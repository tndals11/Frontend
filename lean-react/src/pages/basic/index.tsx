// index.tsx
// : index 파일명은 해당 폴더의 메인 파일로 인식
// - import시 폴더명 만으로 가져오기 가능
import React from 'react'
import Counter from './React_Counter';

const h2style = {
  backgroundColor: 'black',
  color: 'orange'
}


// React는 반드시 반드시 컴포넌트명이 대문자
function Index() {
  // 해당 함수형 컴포넌트의 리턴값: HTML코드 요소
  return (
    <div>
      <h1
        style={{
          backgroundColor: 'black',
          color: 'white'
        }}
      >=== 리액트 기본 문법 ===</h1>
      <h2 style={h2style}>1. 리액트 VS 타입스크립트 (카운터 예제)</h2>
      {/* Counter 컴포넌트 사용 */}
      <Counter />   
    </div>
  )
}

export default Index