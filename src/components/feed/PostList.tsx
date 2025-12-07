import PostItem, { Post } from "./PostItem";
import React from "react";

function PostListComponent({ posts }: { posts: Post[] }) {
  return (
    <div>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}

const PostList = React.memo(PostListComponent);
export default PostList;
