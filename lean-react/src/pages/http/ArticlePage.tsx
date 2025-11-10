import React, { useEffect, useState } from "react";
import ArticleList from "./ArticleList";
import ArticleDetail from "./ArticleDetail";
import ArticleForm from "./ArticleForm";
import {
  getAllArticles,
  type ArticleListResponse,
  type ArticleListResponseList,
} from "@/apis/articleApi";
import { data } from "react-router-dom";

function ArticlePage() {
  // 게시글 목록
  const [articles, setArticles] = useState<ArticleListResponseList>([]);
  // 현재 사용자가 선택한 게시글의 ID
  const [selectedId, setSelectdId] = useState<number | null>(null);

  // 로딩 여부 관리
  const [loading, setLoading] = useState<boolean>(false);

  const fetchArticles = async () => {
    try {
      const data = await getAllArticles();
      setArticles(data);
    } catch (e) {
      console.error("게시글 목록 불러오기 실패:", e);
    } finally {
      setLoading(false);
    }
  };

  //? 초기 목록 코드
  useEffect(() => {
    fetchArticles();
  }, []);

  //! === Event Handler ==
  //새 게시글 추가 (ArticleForm 콜백)
  const handleArticleCreated = async (newArticle: ArticleListResponse) => {
    setArticles((prev) => [newArticle, ...prev]);
  };

  return (
    <div style={{ display: "flex", gap: "30px" }}>
      {/* //# 왼쪽 게시글 목록 */}
      <div style={{ width: "30%" }}>
        {loading ? (
          <p>로딩 중...</p>
        ) : (
          <ArticleList articles={articles} onSelect={setSelectdId} />
        )}
      </div>

      {/* //# 중앙 - 상세 */}
      <div style={{ width: "40%" }}>
        {selectedId ? (
          <ArticleDetail articleId={selectedId} />
        ) : (
          <p>게시글을 선택해주세요</p>
        )}
      </div>

      {/* //# 중앙 - 상세 */}
      <div style={{ width: "30%" }}>
        <ArticleForm onSuccess={handleArticleCreated} />
      </div>
    </div>
  );
}

export default ArticlePage;
