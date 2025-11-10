import type { ArticleListResponse } from "@/apis/articleApi";
import React from "react";

interface Props {
  onSuccess: (newArticle: ArticleListResponse) => void;
}

function ArticleForm({ onSuccess }: Props) {
  return <div></div>;
}

export default ArticleForm;
