// src/lib/api/posts.ts
import { Post } from "../../components/feed/PostItem";

export async function fetchPostsPage({ pageParam = 1 }) {
  // 테스트용 딜레이
  await new Promise((r) => setTimeout(r, 600));

  const fakeData: Post[] = Array.from({ length: 3 }).map((_, i) => ({
    id: (pageParam - 1) * 3 + i + 1,
    username: "eden",
    image: `https://picsum.photos/500/300?random=${pageParam}${i}`,
    caption: `Page ${pageParam} · Item ${i + 1}`,
  }));
  const hasMore = pageParam < 5;

  return { posts: fakeData, nextPage: hasMore ? pageParam + 1 : null };
}
