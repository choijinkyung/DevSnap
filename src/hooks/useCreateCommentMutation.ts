import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createComment } from "../lib/api/comments";

export function useCreateCommentMutation(postId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ content }: { content: string }) =>
      createComment(postId, content),

    onMutate: async ({ content }) => {
      // 기존 쿼리 멈추기 (동시성 문제 방지)
      await queryClient.cancelQueries(["posts", "infinite"]);
      // 현재 캐시 스냅샷
      const previousData = queryClient.getQueryData<any>(["posts", "infinite"]);

      queryClient.setQueryData(["posts", "infinite"], (oldData: any) => {
        if (!oldData) return oldData;
        const optimisticComment = {
          username: "jinny",
          id: Date.now(),
          content: content,
          postId: postId,
        };

        return {
          ...oldData,
          pages: oldData.pages.map((page: any) => ({
            ...page,
            posts: page.posts.map((post: any) =>
              post.id === postId
                ? {
                    ...post,
                    comments: [...post.comments, optimisticComment],
                  }
                : post
            ),
          })),
        };
      });
      return { previousData };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["posts", "infinite"],
        refetchType: "inactive",
      });
    },
    onError: (error, variables, context) => {
      if (context?.previousData) {
        queryClient.setQueryData(["posts", "infinite"], context.previousData);
      }
    },
  });
}
