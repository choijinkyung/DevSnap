import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleLike } from "../lib/api/posts";

export function useToggleLikeMutation(postId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => toggleLike(postId),

    //Optimistic update
    onMutate: async () => {
      // 기존 쿼리 멈추기 (동시성 문제 방지)
      await queryClient.cancelQueries(["posts", "infinite"]);

      // 현재 캐시 스냅샷
      const previousData = queryClient.getQueryData<any>(["posts", "infinite"]);

      // UI 즉시 업데이트 (좋아요 반영)
      queryClient.setQueryData(["posts", "infinite"], (oldData: any) => {
        if (!oldData) return oldData;

        return {
          ...oldData,
          pages: oldData.pages.map((page: any) => ({
            ...page,
            posts: page.posts.map((post: any) =>
              post.id === postId
                ? {
                    ...post,
                    isLiked: !post.isLiked,
                    likes: post.likes + (post.isLiked ? -1 : +1),
                  }
                : post
            ),
          })),
        };
      });
      return { previousData };
    },
    // 에러 나면 롤백
    onError: (error, variables, context) => {
      if (context?.previousData) {
        queryClient.setQueryData(["posts", "infinite"], context.previousData);
      }
    },

    // 성공하면 쿼리 최신화
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["posts", "infinite"],
        refetchType: "inactive",
      });
    },
  });
}
