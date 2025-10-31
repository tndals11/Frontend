import './App.css'
import Basic from "@/pages/basic/index";
import { Route, Routes } from 'react-router-dom';
import RoutePages from '@/pages/route';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <h1>lean React</h1>
      <Navbar />
      {/* Routes 태그: Route를 감싸는 컴포넌트 */}
      <Routes>
        {/* Route 태그: 특정 경로에 컴포넌트 지정 (단일 태그 권장) */}
        <Route path='/basic' element={<Basic />} />
        {/* 
          중첩 라우팅 사용을 위해 반드시 부모 Route의 path 끝에 /*가 필수! 
          - 중첩된 자식 라우트 인식 
        */}
        <Route path='/route/*' element={<RoutePages />} />
      </Routes>
    </>
  )
}

export default App
