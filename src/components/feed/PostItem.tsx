import React from "react";
export type Post = {
  id: number;
  username: string;
  image: string;
  caption: string;
};

function PostItem({ post }: { post: Post }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        marginBottom: "20px",
        padding: "15px",
        overflow: "hidden",
      }}
    >
      <div>{post.username}</div>
      <img
        src={post.image}
        alt="post"
        style={{
          width: "100%",
          aspectRatio: "4/5",
          objectFit: "cover", // use to thumbnail, card img,profile round img
        }}
      ></img>
      <div style={{ padding: "10px" }}>{post.caption}</div>
    </div>
  );
}

export default React.memo(PostItem);
//optimize Re-rendering
//👉 object-fit: cover = “이미지를 어떻게 채울지” -> 이미지 자체 크롭
// 👉 overflow: hidden = “박스 밖으로 나간 부분을 숨길지” -> 박스가 크롭
