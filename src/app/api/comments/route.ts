// src/app/api/comments/route.ts
import { posts } from "@/src/store/serverStore";

export async function POST(req: Request) {
  const { postId, content } = await req.json();

  const post = posts.find((p) => p.id === postId);
  if (!post) {
    return new Response("Post not found", { status: 404 });
  }

  const comment = {
    id: Date.now(),
    postId,
    username: "jinny",
    content,
  };

  post.comments.push(comment);

  return Response.json(comment);
}
