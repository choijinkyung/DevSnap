// src/hooks/usePostsQuery.ts
import { useQuery } from "@tanstack/react-query";
import { fetchPostsPage } from "../lib/api/posts";
import { Post } from "../components/feed/PostItem";

export function usePostsQuery(page: number) {
  return useQuery<Post[]>({
    queryKey: ["posts", page],
    queryFn: () => fetchPostsPage(page),
    staleTime: 1000 * 30, // 30초 동안은 캐시를 신선한 것으로 간주
  });
}
