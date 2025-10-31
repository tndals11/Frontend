import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashBoardStats from './DashBoardStats'
import DashBoard from './DashBoard'

//! React Router DOM
// : React 애플리케이션에서 라우팅을 담당하는 라이브러리 
// - 어떤 URL 경로 (path)에 어떤 컴포넌트를 보여줄지 정의하는 도구  

// cf) Routing(라우팅)
// : 어떤 네트워크 안에서 통신 데이터를 보낼 때 최적의 경로를 선택하는 과정 

//? React Router DOM 설치
// npm install react-router-dom (node_modules가 있는 프로젝트 최상단)

// +) 설치 확인 package.json 확인

//? 주요 컴포넌트 3가지 
//* <BrowerRouter></BrowerRouter>
// : HTML5 History API를 사용하여 브라우저 주소 (URL)와 리액트 UI 동기화
// - 앱 루트 최상단 main.tsx 또는 App.tsx에 반드시 명시!
//   하위 컴포넌트에서 React Router DOM 사용 가능
//&- 새로고침 없이 URL만 변경 (SPA - Single Page Application)
//&- 라우터의 최상위 컨테이너로 한 번만 감싸면 됨

//* <Routes></Routes>
// : 여러 <Route />등을 묶어서 관리 
// - <BrowerRouter></BrowerRouter> 내부에서 사용 가능
//&- 여러 개의 <Route />를 감싸서 "URL"과 일치하는 Route만 렌더링
//&- 한 번에 하나의 Route만 렌더링 (매칭된 첫 번째 Route)
//&- 자식으로 반드시! <Route />만 가질 수 있음

// cf) React Router v6에서 <Switch> -> <Routes>로 변경

//* <Route />
// : 특정 URL 경로(path)에 어떤 컴포넌트를 렌더링할지 정의 
// - <Routes></Routes> 내부에서 사용
//&- 주요 속성
//   path     : URL 경로 (문자열)
//   element  : 해당 경로에 매칭될 때 렌더링할 컴포넌트
//   index    : 부모 라우트의 기본 경로 일 때 (Nested Route 시)
//   childern : 중첩 라우트(Nestd Routes) 정의 가능 

const h2style = {
  backgroundColor: 'black',
  color: 'orange'
}

function Index() {
  return (
    <div>
      <h1
        style={{backgroundColor: 'black', color: 'white'}}>
        === 리액트 라우터 돔 ===</h1>
      <h2 style={h2style}>1. 중첨(Nested) 라우터 예시</h2>
      <Routes>
        {/* /dashboard */}
        <Route path='dashboard' element={<DashBoard />}>
          {/* /dashboard/stats  */}
          <Route path='stats' element={<DashBoardStats />}/>
          {/* /dashboard/settings  */}
          <Route path='settings' element={<DashBoardStats />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default Index