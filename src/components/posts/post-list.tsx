import type { PostWithData } from "@/db/queries/posts";
// import type { Post, User, Topic } from "@prisma/client";
import Link from "next/link";
import paths from "@/paths";

type PostListProps = {
  fetchData: () => Promise<PostWithData[]>;
};

export default async function PostList({ fetchData }: PostListProps) {
  const posts = await fetchData();
  const renderedPosts = posts.map((post) => {
    const topicSlug = post.topic.slug;

    if (!topicSlug) {
      throw new Error("Need a slug to link to a post");
    }

    return (
      <div key={post.id} className="rounded border p-2">
        <Link href={paths.postShowPath(topicSlug, post.id)}>
          <h3 className="text-large font-bold capitalize md:text-lg">
            {post.title}
          </h3>
          <div className="flex flex-row gap-8">
            <p className="text-xs text-gray-400">By {post.user.name}</p>
            <p className="text-xs text-gray-400">
              {post._count.comments} comments
            </p>
          </div>
        </Link>
      </div>
    );
  });

  return <div className="space-y-2">{renderedPosts}</div>;
}
