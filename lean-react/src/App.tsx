import "./App.css";
import Basic from "@/pages/basic/index";
import Todo from "@/pages/todo/index";
import { Navigate, Route, Routes } from "react-router-dom";
import RoutePages from "@/pages/route";
import HTTP from "@/pages/http";
import GlobalState from "@/pages/global_state";

import Hooks from "@/pages/hooks";
import Navbar from "./components/Navbar";
import PostList from "./pages/basic/PostList";
import PostDetail from "./components/PostDetail";
import SearchApp from "./pages/practices/SearchApp";
import Products from "./pages/route/Products";
import ProductDetail from "./pages/route/ProductDetail";
import ProductInfo from "./pages/route/ProductInfo";
import ProductReviews from "./pages/route/ProductReviews";
import ProductDashboard from "./pages/route/ProductDashboard";
import { useUIStore } from "./stores/ui.store";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Toast from "./components/Toast";
import Style from "./pages/css-style/index";
import { useGlobalStore } from "./stores/global.store";
import { useEffect } from "react";
import CSS from "./pages/css-style/CSS";

function App() {
  const { isLoaded, fetchGlobalData } = useGlobalStore();

  useEffect(() => {
    if (!isLoaded) {
      // 전역 상태 관리에 Global 데이터가 없는 경우
      fetchGlobalData();
    }
  }, [isLoaded, fetchGlobalData]); // 맨 처음 실행 + 의존성 배열값 변경 마다

  //% zustand의 store는 호출 시 내부의 스토어를 객체 형식으로 반환
  //% const {전역상태내부의 속성 또는 함수명 } = useUIStore();
  //%> 내부의 모든 속성과 메서드 호출 후 좌항에 일치하는 값만을 남김

  //# 필요한 속성, 메서드만 뽑아서 반환
  const darkMode = useUIStore((state) => state.darkMode); // true: 다크 / false: 라이트

  const appStyle = {
    minHeight: "100vh",
    backgroundColor: darkMode ? "#111" : "#fff",
    color: darkMode ? "#bbb" : "#111",
    transition: "all 0.3s ease",
  };

  return (
    <div style={appStyle}>
      <Header />
      <Sidebar />
      <Navbar />
      {/* Routes 태그: Route를 감싸는 컴포넌트 */}
      <Routes>
        {/* Route 태그: 특정 경로에 컴포넌트 지정 (단일 태그 권장) */}
        <Route path="/basic" element={<Basic />} />
        <Route path="/todo/*" element={<Todo />} />
        {/* 
          중첩 라우팅 사용을 위해 반드시 부모 Route의 path 끝에 /*가 필수! 
          - 중첩된 자식 라우트 인식 
        */}
        <Route path="/route/*" element={<RoutePages />} />
        <Route path="/hooks" element={<Hooks />} />
        <Route path="/http" element={<HTTP />} />
        <Route path="/global-state" element={<GlobalState />} />
        <Route path="/style" element={<Style />} />

        {/* practice 실습 코드 */}
        <Route path="/practice/post" element={<PostList />} />
        <Route path="/practice/post/:id" element={<PostDetail />} />
        <Route path="/practice/search" element={<SearchApp />} />

        {/* pages/route - Product 실습코드 */}
        <Route path="/" element={<Navigate to={"/products"} />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />}>
          {/* 중첩 라우트: 상태경로 */}
          <Route path="info" element={<ProductInfo />} />
          <Route path="reviews" element={<ProductReviews />} />
        </Route>
        <Route path="/dashboard" element={<ProductDashboard />} />
      </Routes>
      <Toast />
    </div>
  );
}

export default App;
