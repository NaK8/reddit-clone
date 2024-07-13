import { db } from "@/db";
import paths from "@/paths";
import { Chip } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

export default async function TopicsList() {
  const getTopics = await db.topic.findMany();
  const showTopic = getTopics.map((topic) => (
    <div className="py-2" key={topic.id}>
      <Link href={paths.topicShowPath(topic.slug)}>
        <Chip color="warning" variant="shadow">
          {topic.slug}
        </Chip>
      </Link>
    </div>
  ));
  return <div className="flex flex-row flex-wrap gap-3">{showTopic}</div>;
}
