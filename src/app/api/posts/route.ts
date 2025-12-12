import { posts } from "@/src/store/serverStore";

const PAGE_SIZE = 3;
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const cursor = Number(searchParams.get("cursor")) || 0;

  const startIndex = cursor;
  const endIndex = startIndex + PAGE_SIZE;

  const slicedPosts = posts.slice(startIndex, endIndex);

  const nextCursor = endIndex < posts.length ? endIndex : null;

  return Response.json({ posts: slicedPosts, nextCursor });
}
