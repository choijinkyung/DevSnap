"use client";

import PostList from "@/src/components/feed/PostList";
import { usePost } from "@/src/hooks/usePosts";
import SkeletonPostItem from "@/src/components/feed/SkeletonPostItem";

export default function FeedPage() {
  const { posts, loading, error } = usePost();

  if (loading)
    return (
      <div>
        <h2>Feed</h2>
        <SkeletonPostItem />
        <SkeletonPostItem />
        <SkeletonPostItem />
      </div>
    );
  if (error) return <div>Error:{error}</div>;

  return (
    <div>
      <h2>Feed</h2>
      <PostList posts={posts} />
    </div>
  );
}
