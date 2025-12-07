import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchPostsPage } from "../lib/api/posts";

export function useInfinitePostsQuery() {
  return useInfiniteQuery({
    queryKey: ["posts", "infinite"],
    queryFn: fetchPostsPage,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });
}
