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

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
