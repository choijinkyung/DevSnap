export type ServerComment = {
  id: number;
  username: string;
  content: string;
  postId: number;
};

export type ServerPost = {
  id: number;
  username: string;
  image: string;
  caption: string;
  isLiked: boolean;
  likes: number;
  comments: ServerComment[];
};
// ❗ DB 대신 메모리
export const posts: ServerPost[] = [
  {
    id: 1,
    username: "eden",
    image: "https://picsum.photos/500/600?1",
    caption: "Hello, This is First Post",
    likes: 20,
    isLiked: false,
    comments: [],
  },
  {
    id: 2,
    username: "eden",
    image: "https://picsum.photos/500/600?2",
    caption: "Second post",
    likes: 3,
    isLiked: false,
    comments: [],
  },
  {
    id: 3,
    username: "eden",
    image: "https://picsum.photos/500/600?3",
    caption: "Second post",
    likes: 13,
    isLiked: false,
    comments: [],
  },
  {
    id: 4,
    username: "eden",
    image: "https://picsum.photos/500/600?4",
    caption: "Second post",
    likes: 52,
    isLiked: false,
    comments: [],
  },
  {
    id: 5,
    username: "eden",
    image: "https://picsum.photos/500/600?5",
    caption: "Second post",
    likes: 87,
    isLiked: false,
    comments: [],
  },
  {
    id: 6,
    username: "eden",
    image: "https://picsum.photos/500/600?6",
    caption: "Second post",
    likes: 110,
    isLiked: false,
    comments: [],
  },
];
