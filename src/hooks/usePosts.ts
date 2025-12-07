import { useCallback, useEffect, useState } from "react";
import { Post } from "../components/feed/PostItem";

export async function fetchPosts(page: number): Promise<Post[]> {
    
}

export function usePost() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchPage(page);
  }, [page]);

  async function fetchPage(page: number) {
    try {
      if (page === 1) {
        setLoading(true);
      } else {
        setLoadingMore(true);
      }

      await new Promise((r) => setTimeout(r, 600));
      // 가짜 데이터: 페이지마다 3개씩 생성
      const fakeData: Post[] = Array.from({ length: 3 }).map((_, i) => ({
        id: (page - 1) * 3 + i + 1,
        username: "eden",
        image: `https://picsum.photos/500/300?random=${page}${i}`,
        caption: `Page ${page} · Item ${i + 1}`,
      }));

      // 예시로 5페이지까지만 있다고 가정
      if (page >= 5) {
        setHasMore(false);
      }
      setPosts((prev) => [...prev, ...fakeData]);
    } catch (error) {
      setError("Failed to fetch posts");
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  }

  const loadMore = useCallback(() => {
    if (!loadingMore && hasMore) {
      setPage((prev) => prev + 1);
    }
  }, [loadingMore, hasMore]);

  return { posts, loading, loadingMore, error, hasMore, loadMore };
}

/**
 * usePosts()
→ 데이터 패칭 로직을 페이지에서 분리
→ 유지보수 + 테스트 + 재사용 쉬워짐
→ 컴포넌트는 UI만 신경 쓰고, 훅은 로직만 담당
 */
//later -> infinite scroll, pagination, laze-loading, abortController
