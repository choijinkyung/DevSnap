import { useEffect, useState } from "react";
import { Post } from "../components/feed/PostItem";

export function usePost() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    try {
      setLoading(true);
      await new Promise((r) => setTimeout(r, 600));

      const data: Post[] = [
        {
          id: 1,
          username: "eden",
          image: "https://picsum.photos/500/300?random=1",
          caption: "오늘 바람 너무 시원하다 🌿",
        },
        {
          id: 2,
          username: "jiky",
          image: "https://picsum.photos/500/300?random=2",
          caption: "밴쿠버는 비오지만 좋은 하루 😊",
        },
        {
          id: 3,
          username: "sunny",
          image: "https://picsum.photos/500/300?random=3",
          caption: "개발하기 좋은 날!",
        },
      ];
      setPosts(data);
    } catch (err) {
      setError("Failed to fetch posts");
    } finally {
      setLoading(false);
    }
  }

  return { posts, loading, error };
}

/**
 * usePosts()
→ 데이터 패칭 로직을 페이지에서 분리
→ 유지보수 + 테스트 + 재사용 쉬워짐
→ 컴포넌트는 UI만 신경 쓰고, 훅은 로직만 담당
 */
//later -> infinite scroll, pagination, laze-loading, abortController