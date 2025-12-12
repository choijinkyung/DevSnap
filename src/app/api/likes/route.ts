import { posts } from "@/src/store/serverStore";

export async function POST(req:Request) {
  const { postId } = await req.json();

  const post = posts.find((p) => p.id === postId);
  if (!post) return new Response("Post not found", { status: 404 });

  post.isLiked = !post.isLiked;
  post.likes += post.isLiked ? 1 : -1;

  return Response.json({
    isLiked: post.isLiked,
    likes: post.likes,
  });
}
