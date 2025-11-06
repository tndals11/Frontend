import React, { useEffect, useState } from "react";
import type { Post } from "./Post";
import { mockApi } from "./Axios";

function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = async () => {
    // % GET
    const response = await mockApi.get("/posts?_limit=5");

    setPosts(response.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleUpdateInfo = (id: number) => {
    localStorage.setItem("editingPostId", String(id));
  };

  const handleDeleteInfo = async (id: number) => {
    await mockApi.delete(`/posts/${id}`);
    alert("삭제 완료");
    fetchPosts();
  };

  return (
    <div>
      <h2>게시글 목록</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
            {/* post.id 값의 타입 단언! (Post 인터페이스 내부에서 옵셔널)*/}
            <button onClick={() => handleUpdateInfo(post.id!)}>수정</button>
            <button onClick={() => handleDeleteInfo(post.id!)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
