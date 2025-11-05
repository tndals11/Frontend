import SearchBox from "@/components/SearchBox";
import SearchResults from "@/components/SearchResults";
import { useSearch } from "@/pages/hooks/useSearch";
import React from "react";

//! 전체 페이지 구성
// - useSearch 커스텀 훅을 사용하여 검색 기능 통합 관리
// - SearchBox, SearchResults를 UI로 분리
function SearchApp() {
  const { query, setQuery, results, loading, inputRef, handleSearch, reset } =
    useSearch("");

  return (
    <div>
      <SearchBox
        query={query}
        setQuery={setQuery}
        handleSearch={handleSearch}
        reset={reset}
        inputRef={inputRef}
        loading={loading}
      />

      {/* 검색 목록 컴포넌트 */}
      <SearchResults results={results} loading={loading} />
    </div>
  );
}

export default SearchApp;
