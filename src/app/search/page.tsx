import PostList from "@/components/posts/post-list";
import { searchPostBySearchTerm } from "@/db/queries/posts";
import { redirect } from "next/navigation";
import React from "react";

interface SearchPageProps {
  searchParams: {
    term: string;
  };
}

export default async function Search({ searchParams }: SearchPageProps) {
  const { term } = searchParams;
  if (!term) {
    redirect("/");
  }
  return (
    <div>
      <PostList fetchData={() => searchPostBySearchTerm(term)} />
    </div>
  );
}
