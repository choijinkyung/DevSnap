import PostItem, { Post } from "./PostItem";

export default function PostList({ posts }: { posts: Post[] }) {
  return (
    <div>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}
