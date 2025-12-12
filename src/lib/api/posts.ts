type ToggleLikeResponse = {
  isLiked: boolean;
  likes: number;
};

export async function fetchPostsPage({ pageParam = 0 }) {
  const res = await fetch(`/api/posts?cursor=${pageParam}`, { method: "GET" });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  const data = await res.json();

  return {
    posts: data.posts,
    nextPage: data.nextCursor,
  };
}

export async function toggleLike(postId: number): Promise<ToggleLikeResponse> {
  const res = await fetch(`/api/likes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ postId }),
  });
  if (!res.ok) {
    throw new Error("Failed to liked");
  }
  return res.json();
}
