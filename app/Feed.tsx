"use client";
import client from "../apollo-client";
import { useQuery } from "@apollo/client";
import React from "react";
import { GET_ALL_POSTS, GET_ALL_POSTS_BY_TOPIC } from "../graphql/queries";
import Post from "./Post";

type Props = {
  topic?: string;
};
function Feed({ topic }: Props) {
  // const { data, error } = await client.query({
  //   query: GET_ALL_POSTS,
  // });

  // const { data, error } = useQuery(GET_ALL_POSTS);

  const { data, error } = !topic
    ? useQuery(GET_ALL_POSTS)
    : useQuery(GET_ALL_POSTS_BY_TOPIC, { variables: { topic: topic } });

  // if (data) {
  //   console.log("Data:", data);
  // } else {
  //   console.log(error);
  // }

  // const posts: Post[] = data?.getPostList;
  const posts: Post[] = !topic ? data?.getPostList : data?.getPostListByTopic;
  // console.log("Posts:", posts);

  return (
    <div className="mt-5 space-y-4 max-w-5xl mx-auto flex-1">
      {posts?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Feed;
