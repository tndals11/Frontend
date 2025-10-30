// index.tsx
// : index 파일명은 해당 폴더의 메인 파일로 인식
// - import시 폴더명 만으로 가져오기 가능
import Counter from './React_Counter';
import Component, { Img }  from './BasicComponent';
import JSX from './JSX';
import JSX02 from './JSX02';
import Props from './Props01';
import Props02 from './Props02';
import Rendering from './Rendering';

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
      <h2 style={h2style}>2. Component: 리액트를 구성하는 기본구조</h2>
      <Component />
      {/* 컴포넌트: 재사용 가능한 UI 집합 */}
      <div style={{backgroundColor: 'pink'}}>
        <Img />
      </div>

      <h2 style={h2style}>3. JSX(TSX): 리액트의 기본 문법</h2>
      <JSX />
      <JSX02 />

      <h2 style={h2style}>4. Props: 리액트의 데이터 전달 (부모/자식)</h2>
      <Props />
      <Props02 />

      <h2 style={h2style}>5. Rendering: 조건부 렌더링</h2>
      <Rendering />
    </div>
  )
}

export default Index