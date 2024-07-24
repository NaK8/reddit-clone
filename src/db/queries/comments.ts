import type { Comment } from "@prisma/client";
import { db } from "@/db";
import { cache } from "react";

export type CommentWithAuther = Comment & {
  user: { name: string | null; image: string | null };
};

export const fetchCommentByPostId = cache(
  (postId: string): Promise<CommentWithAuther[]> => {
    console.log("Make a query");
    return db.comment.findMany({
      where: { postId },
      include: { user: { select: { name: true, image: true } } },
    });
  },
);
