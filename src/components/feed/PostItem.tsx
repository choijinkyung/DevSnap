import { useCreateCommentMutation } from "@/src/hooks/useCreateCommentMutation";
import { useToggleLikeMutation } from "@/src/hooks/useToggleLikeMutation";
import React from "react";

export type Comment = {
  id: number;
  postId: number;
  username: string;
  content: string;
};

export type Post = {
  id: number;
  username: string;
  image: string;
  comments: Comment[];
  caption: string;
  likes: number; //number of likes
  isLiked: boolean; // MySelf
};

function PostItem({ post }: { post: Post }) {
  const { mutate: toggleLike } = useToggleLikeMutation(post.id);
  const { mutate: createComment } = useCreateCommentMutation(post.id);
  const [content, setContent] = React.useState("");

  function createCommentFunc() {
    if (!content.trim()) return;
    createComment({ content });
    setContent("");
  }
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        marginBottom: "20px",
        // gap: "8px",

        padding: "15px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div>
        <div>
          <strong>{post.username}</strong>
        </div>
        <img
          src={post.image}
          alt="post"
          style={{
            width: "100%",
            aspectRatio: "4/5",
            objectFit: "cover", // use to thumbnail, card img,profile round img
          }}
        ></img>
        <div style={{ padding: "10px" }}>
          <button
            onClick={() => toggleLike()}
            style={{
              border: "none",
              background: "transparent",
              cursor: "pointer",
              fontSize: "20px",
            }}
          >
            {post.isLiked ? "❤️" : "🤍"}
          </button>

          <span style={{ marginLeft: "8px" }}>{post.likes} likes</span>

          <div style={{ marginTop: "6px" }}>{post.caption}</div>

          <div style={{ marginTop: "6px" }}>
            <input
              name="content"
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  createCommentFunc();
                }
              }}
            ></input>
            <button
              onClick={() => {
                createCommentFunc();
              }}
            >
              Submit
            </button>
          </div>

          {post.comments?.map(({ content, id, username }) => (
            <div key={id} style={{ marginTop: "6px" }}>
              <strong>{username}</strong>
              <span style={{ marginLeft: "3px" }}>{content}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default React.memo(PostItem);
//optimize Re-rendering
//👉 object-fit: cover = “이미지를 어떻게 채울지” -> 이미지 자체 크롭
// 👉 overflow: hidden = “박스 밖으로 나간 부분을 숨길지” -> 박스가 크롭
