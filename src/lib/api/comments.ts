export async function createComment(postId: number, content: string) {
  const res = await fetch("/api/comments", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ postId, content }),
  });

  if (!res.ok) {
    throw new Error("Failed to create comment");
  }
  return await res.json();
}
