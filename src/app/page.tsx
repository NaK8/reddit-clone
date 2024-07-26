import PostList from "@/components/posts/post-list";
import TopicCreateForm from "@/components/topics/topic-create-form";
import TopicsList from "@/components/topics/topics-list";
import { fetchTopPosts } from "@/db/queries/posts";
import { Divider } from "@nextui-org/react";

export default function home() {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-4">
      <div className="md:col-span-3">
        <h1 className="m-2 text-2xl">Create Topic</h1>
        <PostList fetchData={fetchTopPosts} />
      </div>
      <div className="rounded-md border border-gray-300 py-2">
        <div className="mx-2">
          <TopicCreateForm />
        </div>
        <Divider className="my-2" />
        <div className="mx-2">
          <h3 className="py-2 text-xl">Topics</h3>
          <TopicsList />
        </div>
      </div>
    </div>
  );
}
