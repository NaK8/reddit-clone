import PostCreateForm from "@/components/posts/post-create-form";
import PostList from "@/components/posts/post-list";
import React from "react";
import { fetchPostByTopicSlug } from "@/db/queries/posts";

export default function TopicShowPage({
  params,
}: {
  params: { slug: string };
}) {
  console.log(params.slug);
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h3 className="mb-2 text-3xl font-bold">{params.slug}</h3>
        <PostList fetchData={() => fetchPostByTopicSlug(params.slug)} />
      </div>
      <div>
        <PostCreateForm slug={params.slug} />
      </div>
    </div>
  );
}
