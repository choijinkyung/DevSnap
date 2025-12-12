"use client";

import PostList from "../../components/feed/PostList";
import SkeletonPostItem from "../../components/feed/SkeletonPostItem";
import { useInfinitePostsQuery } from "../../hooks/useInfinitePostsQuery";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";

export default function FeedPage() {
  const {
    data,
    isPending,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfinitePostsQuery();

  const bottomRef = useInfiniteScroll(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  });
  const allPosts = data?.pages.flatMap((page) => page.posts) ?? [];

  if (allPosts.length === 0) {
    return (
      <div>
        <h2>Feed</h2>
        <SkeletonPostItem />
        <SkeletonPostItem />
        <SkeletonPostItem />
      </div>
    );
  }

  if (isError) {
    return <div>❌ Error loading posts</div>;
  }

  return (
    <div>
      <h2>Feed</h2>

      <PostList posts={allPosts} />

      <div ref={bottomRef} style={{ height: 40 }} />

      {isFetchingNextPage && (
        <>
          <SkeletonPostItem />
          <SkeletonPostItem />
        </>
      )}

      {!hasNextPage && (
        <div style={{ textAlign: "center", marginTop: "12px", color: "#999" }}>
          No more posts.
        </div>
      )}
    </div>
  );
}
